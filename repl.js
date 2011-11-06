#!/usr/bin/env node
//
// Copyright 2011 Iris Couch
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var util = require('util')
  , repl = require('repl')
  , bigdecimal = require('./build/bigdecimal')
  ;

var session = repl.start('BigDec> ');
session.context.bigdecimal = bigdecimal;
session.context.BD = bigdecimal;

session.context.puts = util.puts || console.log;
session.context.dir = util.dir;
session.context.inspect = util.inspect;
session.context.I = util.inspect;