// Automatically generated with Reach 0.1.7 (0dfb2f8b)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (0dfb2f8b)';
export const _backendVersion = 7;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Digest;
  
  
  const v55 = stdlib.protect(ctc0, interact.amt, 'for Alice\'s interact field amt');
  const v56 = stdlib.protect(ctc0, interact.pass, 'for Alice\'s interact field pass');
  
  const v59 = stdlib.digest(ctc1, [v56]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v59, v55],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2, ctc0],
    pay: [v55, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v61, v62], secs: v64, time: v63, didSend: v32, from: v60 } = txn1;
      
      sim_r.txns.push({
        amt: v62,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v61, v62], secs: v64, time: v63, didSend: v32, from: v60 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v44, from: v72 } = txn2;
  ;
  const v77 = stdlib.digest(ctc1, [v73]);
  const v78 = stdlib.digestEq(v61, v77);
  stdlib.assert(v78, {
    at: './index.rsh:37:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v61, v62], secs: v64, time: v63, didSend: v32, from: v60 } = txn1;
  ;
  const v69 = stdlib.protect(ctc1, await interact.getPassword(), {
    at: './index.rsh:30:49:application',
    fs: ['at ./index.rsh:29:11:application call to [unknown function] (defined at: ./index.rsh:29:15:function exp)'],
    msg: 'getPassword',
    who: 'Bob'
    });
  const v70 = stdlib.digest(ctc2, [v69]);
  const v71 = stdlib.digestEq(v61, v70);
  stdlib.assert(v71, {
    at: './index.rsh:31:11:application',
    fs: ['at ./index.rsh:29:11:application call to [unknown function] (defined at: ./index.rsh:29:15:function exp)'],
    msg: null,
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v61, v62, v69],
    evt_cnt: 1,
    funcNum: 1,
    lct: v63,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v73], secs: v75, time: v74, didSend: v44, from: v72 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:33:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v77 = stdlib.digest(ctc2, [v73]);
      const v78 = stdlib.digestEq(v61, v77);
      stdlib.assert(v78, {
        at: './index.rsh:37:10:application',
        fs: [],
        msg: null,
        who: 'Bob'
        });
      sim_r.txns.push({
        amt: v62,
        kind: 'from',
        to: v72,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v44, from: v72 } = txn2;
  ;
  const v77 = stdlib.digest(ctc2, [v73]);
  const v78 = stdlib.digestEq(v61, v77);
  stdlib.assert(v78, {
    at: './index.rsh:37:10:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `BSAEAAEIICYBADEgMgMSRDEGMgMSRCI1ADEYQQGCKGRJIls1ASRbNQIxG4EDEkQ2GgAXSSISQQDOSCI0ARJENhoBF0kiEkw0AhIRRChINhoCSRWBKBJESVcAIDX/SSVbNf5IgARkYmYwNP9QNP4WULCBoI0GSUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRINP5JQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREg0/zT+FlAjr0sBVwAoZ0gjNQEyBjUCMRkiEkRCAHhJIxJBAHBIIzQBEkQ2GgEXSSISTDQCEhFEI69kSVcAIDX/SSVbNf5INhoCSRUkEkRJFzX9SIAEZDUxNTT9FlCwNP80/RYBEkQ0/klBAAyxsggjshAxALIHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgACIkQoNAEWNAIWUGc0AElJIwgyBBJEMRYSRIHoBwsxAQ5EI0MxGSISRCI1ASI1AkL/0Q==`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 8
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161072d38038061072d833981016040819052610022916101e8565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602080820151015161008590341460076100f0565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e89260029290910190610119565b50505061027d565b816101155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012590610242565b90600052602060002090601f016020900481019282610147576000855561018d565b82601f1061016057805160ff191683800117855561018d565b8280016001018555821561018d579182015b8281111561018d578251825591602001919060010190610172565b5061019992915061019d565b5090565b5b80821115610199576000815560010161019e565b604080519081016001600160401b03811182821017156101e257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fb57600080fd5b6102036101b2565b835181526040601f198301121561021957600080fd5b6102216101b2565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025657607f821691505b6020821081141561027757634e487b7160e01b600052602260045260246000fd5b50919050565b6104a18061028c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610364565b6100b8565b3480156100a157600080fd5b506100aa61024c565b60405161006492919061037c565b6100c8600160005414600a6102e9565b6100e2813515806100db57506001548235145b600b6102e9565b6000808055600280546100f4906103d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103d9565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061040e565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d1341560086102e9565b604080516020848101358183015282518083038201815291830190925280519101208151610201911460096102e9565b6020810151604051339180156108fc02916000818181858888f19350505050158015610231573d6000803e3d6000fd5b50600080805560018190556102489060029061030e565b5050565b600060606000546002808054610261906103d9565b80601f016020809104026020016040519081016040528092919081815260200182805461028d906103d9565b80156102da5780601f106102af576101008083540402835291602001916102da565b820191906000526020600020905b8154815290600101906020018083116102bd57829003601f168201915b50505050509050915091509091565b816102485760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461031a906103d9565b6000825580601f1061032a575050565b601f016020900490600052602060002090810190610348919061034b565b50565b5b80821115610360576000815560010161034c565b5090565b60006040828403121561037657600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103b057858101830151858201606001528201610394565b818111156103c2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ed57607f821691505b6020821081141561037657634e487b7160e01b600052602260045260246000fd5b60006040828403121561042057600080fd5b6040516040810181811067ffffffffffffffff8211171561045157634e487b7160e01b600052604160045260246000fd5b60405282518152602092830151928101929092525091905056fea2646970667358221220b931f5e9eeb613538f520c78f79c2b40731fa7cfe74fc3aa6331edda8007929d64736f6c63430008090033`,
  BytecodeLen: 1837,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
