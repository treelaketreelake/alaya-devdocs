(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[3732],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7376:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var n=t(2122),l=t(9756),r=(t(7294),t(3905)),o={id:"Command_Line_Tools",title:"Alaya\u547d\u4ee4\u884c\u5de5\u5177",sidebar_label:"Alaya\u547d\u4ee4\u884c\u5de5\u5177"},p=void 0,s={unversionedId:"Command_Line_Tools",id:"Command_Line_Tools",isDocsHomePage:!1,title:"Alaya\u547d\u4ee4\u884c\u5de5\u5177",description:"Alaya\u547d\u4ee4\u884c\u53c2\u6570\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Alaya_Command_Line_Tools.md",sourceDirName:".",slug:"/Command_Line_Tools",permalink:"/alaya-devdocs/zh-CN/Command_Line_Tools",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Alaya_Command_Line_Tools.md",version:"current",frontMatter:{id:"Command_Line_Tools",title:"Alaya\u547d\u4ee4\u884c\u5de5\u5177",sidebar_label:"Alaya\u547d\u4ee4\u884c\u5de5\u5177"},sidebar:"docs",previous:{title:"MTool\u79bb\u7ebf\u6559\u7a0b",permalink:"/alaya-devdocs/zh-CN/Offline_MTool"},next:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/alaya-devdocs/zh-CN/Development_guide"}},i=[{value:"Alaya\u547d\u4ee4\u884c\u53c2\u6570\u8bf4\u660e",id:"alaya\u547d\u4ee4\u884c\u53c2\u6570\u8bf4\u660e",children:[]},{value:"\u5e38\u7528rpc\u547d\u4ee4",id:"\u5e38\u7528rpc\u547d\u4ee4",children:[{value:"admin",id:"admin",children:[]},{value:"platon",id:"platon",children:[]},{value:"personal",id:"personal",children:[]},{value:"net",id:"net",children:[]},{value:"debug",id:"debug",children:[]}]},{value:"alayakey\u5de5\u5177\u4f7f\u7528\u8bf4\u660e",id:"alayakey\u5de5\u5177\u4f7f\u7528\u8bf4\u660e",children:[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[]}]}],c={toc:i};function u(e){var a=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alaya\u547d\u4ee4\u884c\u53c2\u6570\u8bf4\u660e"},"Alaya\u547d\u4ee4\u884c\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'NAME:\n   alaya.exe - the alaya-go command line interface\n\n   Copyright 2019 The Alaya-Go Authors\n\nUSAGE:\n   alaya.exe [options] command [command options] [arguments...]\n\nVERSION:\n   0.14.0-unstable\n\nCOMMANDS:\n   account           Manage accounts\n   attach            Start an interactive JavaScript environment (connect to node)\n   bug               opens a window to report a bug on the alaya repo\n   console           Start an interactive JavaScript environment\n   copydb            Create a local chain from a target chaindata folder\n   dump              Dump a specific block from storage\n   dumpconfig        Show configuration values\n   export-preimages  Export the preimage database into an RLP stream\n   import-preimages  Import the preimage database from an RLP stream\n   init              Bootstrap and initialize a new genesis block\n   js                Execute the specified JavaScript files\n   license           Display license information\n   removedb          Remove blockchain and state databases\n   version           Print version numbers\n   help, h           Shows a list of commands or help for one command\n\nALAYA OPTIONS:\n  --config value                                        TOML configuration file\n  --datadir "C:\\Users\\jungle\\AppData\\Roaming\\Alaya"  Data directory for the databases and keystore\n  --keystore                                            Directory for the keystore (default = inside the datadir)\n  --nousb                                               Disables monitoring for and managing USB hardware wallets\n  --networkid value                                     Network identifier (integer, 1=Frontier, 2=Morden (disused), 3=Ropsten, 4=Rinkeby) (default: 1)\n  --main                                                Mainnet network: pre-configured main network (default network)\n  --testnet                                             Testnet network: pre-configured test network\n  --alayatestnet                                        alaya test network: pre-configured alaya test network\n  --syncmode "full"                                     Blockchain sync mode ("fast", "full", or "light")\n  --identity value                                      Custom node name\n  --lightserv value                                     Maximum percentage of time allowed for serving LES requests (0-90) (default: 0)\n  --lightpeers value                                    Maximum number of LES client peers (default: 100)\n  --lightkdf                                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength\n\nDEVELOPER CHAIN OPTIONS:\n  --dev.period value  Block period to use in developer mode (0 = mine only if transaction pending) (default: 0)\n\nTRANSACTION POOL OPTIONS:\n  --txpool.locals value         Comma separated accounts to treat as locals (no flush, priority inclusion)\n  --txpool.nolocals             Disables price exemptions for locally submitted transactions\n  --txpool.journal value        Disk journal for local transaction to survive node restarts (default: "transactions.rlp")\n  --txpool.rejournal value      Time interval to regenerate the local transaction journal (default: 1h0m0s)\n  --txpool.pricelimit value     Minimum gas price limit to enforce for acceptance into the pool (default: 1)\n  --txpool.pricebump value      Price bump percentage to replace an already existing transaction (default: 10)\n  --txpool.accountslots value   Minimum number of executable transaction slots guaranteed per account (default: 16)\n  --txpool.globalslots value    Maximum number of executable transaction slots for all accounts (default: 16384)\n  --txpool.accountqueue value   Maximum number of non-executable transaction slots permitted per account (default: 64)\n  --txpool.globalqueue value    Maximum number of non-executable transaction slots for all accounts (default: 4096)\n  --txpool.globaltxcount value  Maximum number of transactions for package (default: 3000)\n  --txpool.lifetime value       Maximum amount of time non-executable transaction are queued (default: 3h0m0s)\n  --txpool.cacheSize value      After receiving the specified number of transactions from the remote, move the transactions in the queen to pending (default: 0)\n\nPERFORMANCE TUNING OPTIONS:\n  --cache value           Megabytes of memory allocated to internal caching (default: 1024)\n  --cache.database value  Percentage of cache memory allowance to use for database io (default: 75)\n  --cache.gc value        Percentage of cache memory allowance to use for trie pruning (default: 25)\n  --cache.triedb value    Megabytes of memory allocated to triedb internal caching (default: 512)\n\nACCOUNT OPTIONS:\n  --unlock value    Comma separated list of accounts to unlock\n  --password value  Password file to use for non-interactive password input\n\nAPI AND CONSOLE OPTIONS:\n  --rpc                  Enable the HTTP-RPC server\n  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")\n  --rpcport value        HTTP-RPC server listening port (default: 6789)\n  --rpcapi value         API\'s offered over the HTTP-RPC interface\n  --ws                   Enable the WS-RPC server\n  --wsaddr value         WS-RPC server listening interface (default: "localhost")\n  --wsport value         WS-RPC server listening port (default: 6790)\n  --wsapi value          API\'s offered over the WS-RPC interface\n  --wsorigins value      Origins from which to accept websockets requests\n  --ipcdisable           Disable the IPC-RPC server\n  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)\n  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)\n  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts \'*\' wildcard. (default: "localhost")\n  --jspath loadScript    JavaScript root path for loadScript (default: ".")\n  --exec value           Execute JavaScript statement\n  --preload value        Comma separated list of JavaScript files to preload into the console\n\nNETWORKING OPTIONS:\n  --bootnodes value          Comma separated enode URLs for P2P discovery bootstrap (set v4+v5 instead for light servers)\n  --bootnodesv4 value        Comma separated enode URLs for P2P v4 discovery bootstrap (light server, full nodes)\n  --port value               Network listening port (default: 16789)\n  --maxpeers value           Maximum number of network peers (network disabled if set to 0) (default: 50)\n  --maxconsensuspeers value  Maximum number of network consensus peers (network disabled if set to 0) (default: 75)\n  --maxpendpeers value       Maximum number of pending connection attempts (defaults used if set to 0) (default: 0)\n  --nat value                NAT port mapping mechanism (any|none|upnp|pmp|extip:<IP>) (default: "any")\n  --nodiscover               Disables the peer discovery mechanism (manual peer addition)\n  --netrestrict value        Restricts network communication to the given IP networks (CIDR masks)\n  --nodekey value            P2P node key file\n  --nodekeyhex value         P2P node key as hex (for testing)\n\nMINER OPTIONS:\n  --miner.gasprice "1000000000"  Minimum gas price for mining a transaction\n  --miner.gastarget value        Target gas floor for mined blocks (default: 4712388)\n\nGAS PRICE ORACLE OPTIONS:\n  --gpoblocks value      Number of recent blocks to check for gas prices (default: 20)\n  --gpopercentile value  Suggested gas price is the given percentile of a set of recent transaction gas prices (default: 60)\n\nLOGGING AND DEBUGGING OPTIONS:\n  --nocompaction            Disables db compaction after import\n  --verbosity value         Logging verbosity: 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)\n  --vmodule value           Per-module verbosity: comma-separated list of <pattern>=<level> (e.g. eth/*=5,p2p=4)\n  --backtrace value         Request a stack trace at a specific logging statement (e.g. "block.go:271")\n  --debug                   Prepends log messages with call-site location (file and line number)\n  --pprof                   Enable the pprof HTTP server\n  --pprofaddr value         pprof HTTP server listening interface (default: "127.0.0.1")\n  --pprofport value         pprof HTTP server listening port (default: 6060)\n  --memprofilerate value    Turn on memory profiling with the given rate (default: 524288)\n  --blockprofilerate value  Turn on block profiling with the given rate (default: 0)\n  --cpuprofile value        Write CPU profile to the given file\n  --trace value             Write execution trace to the given file\n  --wasmlog value           output wasm contract log to file\n\nMETRICS AND STATS OPTIONS:\n  --metrics                          Enable metrics collection and reporting\n  --metrics.influxdb                 Enable metrics export/push to an external InfluxDB database\n  --metrics.influxdb.endpoint value  InfluxDB API endpoint to report metrics to (default: "http://localhost:8086")\n  --metrics.influxdb.database value  InfluxDB database name to push reported metrics to (default: "platon")\n  --metrics.influxdb.username value  Username to authorize access to the database (default: "test")\n  --metrics.influxdb.password value  Password to authorize access to the database (default: "test")\n  --metrics.influxdb.host.tag host   InfluxDB host tag attached to all measurements (default: "localhost")\n\nDEPRECATED OPTIONS:\n  --targetgaslimit value   Target gas floor for mined blocks (deprecated, use --miner.gastarget) (default: 4712388)\n  --gasprice "1000000000"  Minimum gas price for mining a transaction (deprecated, use --miner.gasprice)\n\nCBFT OPTIONS:\n  --cbft.msg_queue_size value      Message queue size (default: 1024)\n  --cbft.wal.disabled              Disable the Wal server\n  --cbft.max_ping_latency value    Maximum latency of ping (default: 2000)\n  --cbft.blskey value              BLS key file\n  --cbft.blacklist_deadline value  Blacklist effective time. uint:minute (default: "60")\n\nDB OPTIONS:\n  --db.nogc               Disables database garbage collection\n  --db.gc_interval value  Block interval for garbage collection (default: 86400)\n  --db.gc_timeout value   Maximum time for database garbage collection (default: 1m0s)\n  --db.gc_mpt             Enables database garbage collection MPT\n  --db.gc_block value     Number of cache block states, default 10 (default: 10)\n\nVM OPTIONS:\n  --vm.wasm_type value         The actual implementation type of the wasm instance (default: "wagon")\n  --vm.timeout_duration value  The VM execution timeout duration (uint: ms) (default: 0)\n\nMISC OPTIONS:\n  --help, -h  show help\n\n\nCOPYRIGHT:\n   Copyright 2019 The Alaya-Go Authors\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u5e38\u7528rpc\u547d\u4ee4"},"\u5e38\u7528rpc\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf4\u660e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rpc\u7aef\u53e3\u6839\u636e\u5b9e\u9645\u7684\u542f\u52a8\u547d\u4ee4\u8fdb\u884c\u53d8\u66f4\uff0c\u9ed8\u8ba4\u4e3a\uff1a6789")))),(0,r.kt)("h3",{id:"admin"},"admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u6570\u636e\u76ee\u5f55"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.datadir\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684ChainID"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.chainId\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684id"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.id\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684blsPubKey"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.blsPubKey\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684p2p\u7aef\u53e3\u53f7"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.ports.listener\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684peers\u7684\u8fde\u63a5\u4fe1\u606f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.peers\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684\u521b\u4e16\u533a\u5757hash"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.genesis\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770bcbft\u5171\u8bc6\u6bcf\u4e2a\u5171\u8bc6\u8f6e\u5355\u4e2a\u8282\u70b9\u7684\u6700\u5927\u51fa\u5757\u6570($amount)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.amount\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770bcbft\u5171\u8bc6\u6bcf\u4e2a\u5171\u8bc6\u8f6e\u5355\u4e2a\u8282\u70b9\u7684\u51fa\u5757\u7684\u65f6\u95f4\u7a97\u53e3\uff08$period\uff0c\u5355\u4f4d\uff1ams\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.period\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u51fa\u5757\u65f6\u95f4\u95f4\u9694 = period / 1000 / amount")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u4e8c\u8fdb\u5236\u7248\u672c\u53f7\u548c\u7b7e\u540d\u4fe1\u606f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'admin.getProgramVersion()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u96f6\u77e5\u8bc6\u8bc1\u660e\u4fe1\u606f\uff08\u7528\u8282\u70b9\u79c1\u94a5\u53bb\u8bc1\u660e\u8be5\u63a5\u53e3\u51fa\u7684\u8bc1\u660e\u662f\u5426\u6b63\u786e\uff0c\u7528\u4e8e\u8282\u70b9\u8d28\u62bc\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'admin.getSchnorrNIZKProve()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5e95\u5c42\u4f7f\u7528\u7684\u865a\u673a\u7c7b\u578b\uff08EVM/WASM\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.interpreter\n")))),(0,r.kt)("h3",{id:"platon"},"platon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u4e0b\u6240\u6709\u7684\u94b1\u5305\u5730\u5740"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec platon.accounts\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684\u5757\u9ad8"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec platon.blockNumber\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6307\u5b9a\u8d26\u6237\u7684\u4f59\u989d($account\u4e3a\u8d26\u6237\u5730\u5740)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getBalance(\"$account\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6307\u5b9a\u5757\u7684\u4ea4\u6613\u6570\u91cf($blockNumber\u4e3a\u6307\u5b9a\u5757\u7684\u5757\u9ad8\u6216\u533a\u5757hash)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getBlockTransactionCount($blockNumber)'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f($txHash\u4e3a\u4ea4\u6613hash)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getTransaction(\"$txHash\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u4ea4\u6613\u56de\u6267($txHash\u4e3a\u4ea4\u6613hash)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getTransactionReceipt(\"$txHash\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6307\u5b9a\u8d26\u6237\u7684\u4ea4\u6613\u6570\uff08\u53c2\u6570$address\u4e3a\u8d26\u6237\u5730\u5740\uff0c\u7528\u4e8e\u53d1\u4ea4\u6613\u65f6\u6307\u5b9a\u4ea4\u6613\u7684nonce\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getTransactionCount(\"$address\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u5f53\u524d\u8282\u70b9\u6b63\u5728pending\u7684\u4ea4\u6613"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec platon.pendingTransactions\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u9ed8\u8ba4\u7684gasPrice(\u5355\u4f4d\uff1avon)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec platon.gasPrice\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9884\u4f30\u4ea4\u6613\u7684gas(\u53c2\u6570$transaction\u4e3a\u4ea4\u6613\u8be6\u60c5\uff0c\u5355\u4f4d\uff1avon)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.estimateGas($transaction)'\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'alaya attach http://localhost:6789 -exec \'platon.estimateGas({from:"lax1fyeszufxwxk62p46djncj86rd553skpptsj8v6",to:"lax1zhllhqu72wz66cdwly8983xhla2sann75j2ec2",value:"0x10000000000000",data:"0x11",gas:"0x88888",gasprice:"0x333333",nonce:"11"})\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u5e95\u5c42\u7248\u672c\u7684p2p\u534f\u8bae\u53f7"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'web3.toDecimal(platon.protocolVersion)'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u662f\u5426\u5728\u540c\u6b65"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec platon.syncing\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u533a\u5757\u8be6\u60c5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'platon.getBlock($blockNumber)\n")))),(0,r.kt)("h3",{id:"personal"},"personal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u751f\u6210\u94b1\u5305(\u53c2\u6570\u4e3a\u94b1\u5305\u5bc6\u7801)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.newAccount(\"88888888\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u79c1\u94a5\uff0c\u751f\u6210\u94b1\u5305"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.importRawKey($privateKey,$password)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u6570\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"privateKey\uff1a\u79c1\u94a5\uff0c\u53bb\u9664\u5f00\u5934\u76840x"),(0,r.kt)("li",{parentName:"ul"},"password\uff1a\u94b1\u5305\u5bc6\u7801")),(0,r.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u94b1\u5305\u5730\u5740"))),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'alaya attach http://localhost:6789 -exec \'personal.importRawKey("842d943dbb50a8d3fe63af2f82fda3d8f0ca817fe8d47e61698142bac7c24212","88888888")\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u8d26\u6237\u5730\u5740"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.listAccounts'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u672c\u5730\u94b1\u5305\u4fe1\u606f\uff0c\u5305\u62ec\u94b1\u5305\u5730\u5740\uff0c\u94b1\u5305\u6587\u4ef6\u8def\u5f84\uff0c\u94b1\u5305\u72b6\u6001"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.listWallets'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9501\u8d26\u6237"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.lockAccount(platon.accounts[0])'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u9501\u8d26\u6237"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'personal.unlockAccount(platon.accounts[0],\"88888888\",24*3600)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u6570\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u8d26\u6237\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u94b1\u5305\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u9501\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u672a\u7b7e\u540d\u7684\u4ea4\u6613")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'alaya attach http://localhost:6789 -exec \'personal.sendTransaction({from:platon.accounts[2],to:platon.accounts[0],value:web3.toVon("0.1","lat"),nonce:platon.getTransactionCount(platon.accounts[2])},"88888888")\'\n')))),(0,r.kt)("h3",{id:"net"},"net"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684networkid"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec net.version\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684p2p\u7aef\u53e3\u662f\u5426\u5904\u4e8e\u76d1\u542c\u72b6\u6001"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec net.listening\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u8282\u70b9\u7684peers\u8fde\u63a5\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec net.peerCount\n")))),(0,r.kt)("h3",{id:"debug"},"debug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u5f53\u524d\u8282\u70b9\u7ecf\u6d4e\u6a21\u578b\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789 -exec 'debug.economicConfig()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"alaya attach http://localhost:6789 -exec 'debug.verbosity(4)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u65e5\u5fd7\u7ea7\u522b\u8bf4\u660e\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"0\uff1aCRIT"),(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aERROR"),(0,r.kt)("p",{parentName:"blockquote"},"2\uff1aWARN"),(0,r.kt)("p",{parentName:"blockquote"},"3\uff1aINFO"),(0,r.kt)("p",{parentName:"blockquote"},"4\uff1aDEBUG"),(0,r.kt)("p",{parentName:"blockquote"},"5\uff1aTRACE")))),(0,r.kt)("h2",{id:"alayakey\u5de5\u5177\u4f7f\u7528\u8bf4\u660e"},"alayakey\u5de5\u5177\u4f7f\u7528\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\nalayakey [global options] command [command options] [arguments...]\n\nVERSION:\n   0.14.0-unstable-16aced7d\n\nCOMMANDS:\n   generate          generate new keyfile\n   inspect           inspect a keyfile\n   changepassphrase  change the passphrase on a keyfile\n   signmessage       sign a message\n   verifymessage     verify the signature of a signed message\n   genkeypair        generate new private key pair\n   genblskeypair     generate new bls private key pair\n   updateaddress     update hex/bech32 address to mainnet/testnet bech32 address\n   help              Shows a list of commands or help for one command\n   \nGLOBAL OPTIONS:\n   --help, -h     show help\n   --version, -v  print the version\n\n")),(0,r.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u94b1\u5305")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey generate - generate new keyfile\n\nUSAGE:\n   alayakey generate [command options] [ <keyfile> ]\n\nDESCRIPTION:\n   \nGenerate a new keyfile.\n\nIf you want to encrypt an existing private key, it can be specified by setting\n--privatekey with the location of the file containing the private key.\n\n\nOPTIONS:\n   --passwordfile value  the file that contains the passphrase for the keyfile\n   --json                output JSON instead of human-readable format\n   --privatekey value    file containing a raw private key to encrypt\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u94b1\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey generate\n")),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4e00\u4e2aprivatekey\u660e\u6587\u52a0\u5bc6\u751f\u6210\u4e00\u4e2a\u94b1\u5305\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey generate --privatekey ./prikey --json\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u516c\u79c1\u94a5\u5bf9")),(0,r.kt)("p",null,"\u751f\u6210\u8282\u70b9\u516c\u79c1\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey genkeypair - generate new private key pair\n\nUSAGE:\n   alayakey genkeypair [command options] [ ]\n\nDESCRIPTION:\n   \nGenerate a new private key pair.\n\n\nOPTIONS:\n   --json  output JSON instead of human-readable format\n")),(0,r.kt)("p",null,"\u751f\u6210\u8282\u70b9BLS\u516c\u79c1\u94a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey genblskeypair - generate new bls private key pair\n\nUSAGE:\n   alayakey genblskeypair [command options] [  ]\n\nDESCRIPTION:\n   \nGenerate a new bls private key pair.\n\n\nOPTIONS:\n   --json  output JSON instead of human-readable format\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4efb\u610fEIP55/bech32\u5730\u5740\u8f6c\u6362\u4e3aalaya\u5730\u5740")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey updateaddress - update hex/bech32 address to mainnet/testnet bech32 address\n\nUSAGE:\n   alayakey updateaddress [command options] [<address> <address>...]\n\nDESCRIPTION:\n   \nupdate hex/bech32 address to mainnet/testnet bech32 address.\n\n\nOPTIONS:\n   --json                  output JSON instead of human-readable format\n   --hexAddressFile value  file bech32/hex accounts want to update to mainnet/testnet bech32 address,file like  [hex,hex...]\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u5c06EIP55\u5730\u5740\u8f6c\u6362\u4e3aalaya\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey updateaddress 0x1000000000000000000000000000000000000001\n")),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u652f\u6301\u5c06\u4efb\u610fbech32\u5730\u5740\u8f6c\u6362\u4e3aalaya\u5730\u5740\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey updateaddress lax19phpafljm0mgu2fj8mrwyarftpafynxvj0d7lh\noriginAddress:  lax19phpafljm0mgu2fj8mrwyarftpafynxvj0d7lh\nmain net Address: atp19phpafljm0mgu2fj8mrwyarftpafynxvyuffwh\nother net Address: atx19phpafljm0mgu2fj8mrwyarftpafynxvw64raa\n")))}u.isMDXComponent=!0}}]);