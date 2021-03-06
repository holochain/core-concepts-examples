// This test file uses the tape testing framework.
// To learn more, go here: https://github.com/substack/tape
const { Config, Scenario } = require("@holochain/holochain-nodejs")
Scenario.setTape(require("tape"))

// Create a reference to our DNA microservice
const dnaPath = "./dist/helloWorld.dna.json"
const dna = Config.dna(dnaPath)
// Create an agent, alice, within our DNA microservice
const agentAlice = Config.agent("alice")
const instanceAlice = Config.instance(agentAlice, dna)
// Create an agent, bob, within our DNA microservice
const agentBob = Config.agent("bob")
const instanceBob = Config.instance(agentBob, dna)
// Define our scenario with alice and bob
const scenario = new Scenario([instanceAlice, instanceBob])

scenario.runTape("post & get a public message", async (t, { alice, bob }) => {

  // A private message
  const message_string = "Hello, Alice and Bob!"
  const message = {"content": message_string};

  // Alice creates a public message
  const addr = alice.call("message_zome", "create_message", { message_string })
  console.log("Alice's Message Address:", addr)

  // Alice can retrieve the message (from her source chain)
  const resultAlice = await alice.callSync("message_zome", "get_message", {"address": addr.Ok})
  console.log("Alice's Result:", resultAlice)

  // Bob can retrieve the message (from the DHT)
  const resultBob = await bob.callSync("message_zome", "get_message", {"address": addr.Ok})
  console.log("Bob's Result:", resultBob)
  
  // check for Alice's equality of the actual and expected results
  t.deepEqual(resultAlice, { Ok: message })
  // check that Bob get's the proper error
  t.deepEqual(resultBob, { Ok: message })

})
