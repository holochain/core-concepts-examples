<a href="http://holochain.org"><img align="right" width="200" src="https://github.com/holochain/org/blob/master/logo/holochain_logo.png?raw=true" alt="holochain logo" /></a>

[![Project](https://img.shields.io/badge/project-holochain-blue.svg?style=flat-square)](http://holochain.org/)
[![Chat](https://img.shields.io/badge/chat-chat%2eholochain%2enet-blue.svg?style=flat-square)](https://chat.holochain.org)

[![Twitter Follow](https://img.shields.io/twitter/follow/holochain.svg?style=social&label=Follow)](https://twitter.com/holochain)

License: [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

<br/>

| Holochain Links: | [FAQ](https://developer.holochain.org/guide/latest/faq.html) | [Developer Docs](https://developer.holochain.org) | [White Paper](https://github.com/holochain/holochain-proto/blob/whitepaper/holochain.pdf) |
|---|---|---|---|

# core-concepts-examples
A series of sample hApps (Holochain Apps) that explore core concepts for new Holochain developers

## Core Concepts:
| **\#** | **Concept** | **Code** | **Description** |
|---|---|---|---|
| 01.a | **Zome Functions** | [HelloHolo](https://github.com/holochain/core-concepts-examples/tree/master/HelloHolo) | The simplest hApp possible... Use a Zome Function to return the string "Hello, Holo!" |
| 01.b | **Test Driven Development** | [HelloTest](https://github.com/holochain/core-concepts-examples/tree/master/HelloTest) | Using the testing framework and `hc test` |
| 01.c | **Web User Interface** | [HelloHTML](https://github.com/holochain/core-concepts-examples/tree/master/HelloHTML) | Talking to your hApp from a web page with `hc-web-client`. |
| 02 | **Local Source Chain** | [HelloMe](https://github.com/holochain/core-concepts-examples/tree/master/HelloMe) | An agent's private entries (i.e. data) are stored only on its source chain (and not replicated to the shared DHT) |
| 03 | **Shared DHT** | [HelloWorld](https://github.com/holochain/core-concepts-examples/tree/master/HelloWorld) |  An agent's public entries are stored in its source chain as well as replicated to the shared DHT |
| 04 | **Links** | [HelloBlog](https://github.com/holochain/core-concepts-examples/tree/master/HelloBlog) | Links can be used to provide other agents with awareness of the entries they want to find |
| 05 | **Entry Validation** | [HelloValid](https://github.com/holochain/core-concepts-examples/tree/master/HelloValid) | Entries are validated before they are stored (both in the source chain and in the DHT) |

## Contribute
Holochain is an open source project.  We welcome all sorts of participation and are actively working on increasing surface area to accept it.  Please see our [contributing guidelines](/CONTRIBUTING.md) for our general practices and protocols on participating in the community, as well as specific expectations around things like code formatting, testing practices, continuous integration, etc.

Some helpful links:

* Chat with us on our [Chat Server](https://chat.holochain.org) or [Gitter](https://gitter.im/metacurrency/holochain)

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

Copyright (C) 2018, Holochain Foundation

This program is free software: you can redistribute it and/or modify it under the terms of the license p
rovided in the LICENSE file (GPLv3).  This program is distributed in the hope that it will be useful, bu
t WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 PURPOSE.

**Note:** We are considering other 'looser' licensing options (like MIT license) but at this stage are using GPL while we're getting the matter sorted out.  See [this article](https://medium.com/holochain/licensing-needs-for-truly-p2p-software-a3e0fa42be6c) for some of our thinking on licensing for distributed application frameworks.
