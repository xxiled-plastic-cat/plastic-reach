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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  
  
  const v62 = stdlib.protect(ctc2, await interact.getDeal(), {
    at: './index.rsh:19:83:application',
    fs: ['at ./index.rsh:18:15:application call to [unknown function] (defined at: ./index.rsh:18:19:function exp)'],
    msg: 'getDeal',
    who: 'Alice'
    });
  const v63 = v62[stdlib.checkedBigNumberify('./index.rsh:19:13:array', stdlib.UInt_max, 0)];
  const v64 = v62[stdlib.checkedBigNumberify('./index.rsh:19:13:array', stdlib.UInt_max, 1)];
  const v65 = v62[stdlib.checkedBigNumberify('./index.rsh:19:13:array', stdlib.UInt_max, 2)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v63, v64, v65],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1],
    pay: [v64, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v67, v68, v69], secs: v71, time: v70, didSend: v34, from: v66 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v67
        });
      sim_r.txns.push({
        amt: v68,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v67, v68, v69], secs: v71, time: v70, didSend: v34, from: v66 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v79, time: v78, didSend: v45, from: v77 } = txn2;
  ;
  ;
  ;
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v67, v68, v69], secs: v71, time: v70, didSend: v34, from: v66 } = txn1;
  ;
  ;
  const v76 = [v67, v68, v69];
  stdlib.protect(ctc2, await interact.acceptDeal(v76), {
    at: './index.rsh:27:26:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'acceptDeal',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v66, v67, v68, v69],
    evt_cnt: 0,
    funcNum: 1,
    lct: v70,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, 0), [[v69, v67]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v79, time: v78, didSend: v45, from: v77 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v69,
        kind: 'to',
        tok: v67
        });
      sim_r.txns.push({
        amt: v68,
        kind: 'from',
        to: v77,
        tok: undefined
        });
      sim_r.txns.push({
        amt: v69,
        kind: 'from',
        to: v66,
        tok: v67
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v67
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v79, time: v78, didSend: v45, from: v77 } = txn2;
  ;
  ;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `BSAFAAEECKCNBiYBADEgMgMSRDEGMgMSRCI1ADEYQQJMKGRJIls1ASVbNQIxG4EDEkQ2GgAXSSISQQErSCI0ARJENhoBF0kiEkw0AhIRRChINhoCSRWBGBJESSJbNf9JJVs1/kmBEFs1/UiABGY3NzE0/xZQNP4WUDT9FlCwIQRJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREghBElBADQ0AEkjCDUATEsBOAgSRCNLATgQEkQiSwE4ARJEMgNLATgGEkQyA0sBOCASRDIKSwE4BxJESCKxshIkshAyCrIUNP+yEbMiSDT+SUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRIMQA0/xZQNP4WUDT9FlAjr0sBVwA4Z0gjNQEyBjUCMRkiEkRCAOVJIxJBAN1IIzQBEkQ2GgEXSSISTDQCEhFEI69kSVcAIDX/SYEgWzX+SYEoWzX9SYEwWzX8SDYaAkkVIhJESIAEOWE4YrA0/ElBADw0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgUEkRINP1JQQAMsbIII7IQMQCyB7MiSDT8SUEAELGyEiSyEDT/shQ0/rIRsyJIIrGyEiSyEDIJshUyCrIUNP6yEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAAiJEKDQBFjQCFlBnNABJSSMIMgQSRDEWEkSB6AcLMQEORCNDMRkiEkQiNQEiNQJC/9E=`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
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
                "internalType": "address payable",
                "name": "v67",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v67",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
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
  Bytecode: `0x6080604052604051610a8c380380610a8c8339810160408190526100229161022e565b6000805543600355604080518251815260208084015180516001600160a01b0316828401529081015182840152820151606082015290517f09dcf99bab8403f2ad96a278879a2e333122fff3ae5cb4798f3c3ab7f7b0fece9181900360800190a160208082015101516100989034146007610136565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518b01518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919261012e926002929091019061015f565b50505061030f565b8161015b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461016b906102d4565b90600052602060002090601f01602090048101928261018d57600085556101d3565b82601f106101a657805160ff19168380011785556101d3565b828001600101855582156101d3579182015b828111156101d35782518255916020019190600101906101b8565b506101df9291506101e3565b5090565b5b808211156101df57600081556001016101e4565b604051606081016001600160401b038111828210171561022857634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561024157600080fd5b604080519081016001600160401b038111828210171561027157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561028a57600080fd5b6102926101f8565b60208501519092506001600160a01b03811681146102af57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806102e857607f821691505b6020821081141561030957634e487b7160e01b600052602260045260246000fd5b50919050565b61076e8061031e6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610579565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610249565b6040516100649291906105c1565b6100c8600160005414600a6102e6565b6100e2813515806100db57506001548235145b600b6102e6565b6000808055600280546100f4906105fb565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906105fb565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061064c565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101b691906106da565b60405180910390a16101ca341560086102e6565b6101e76101e0338360200151846060015161030c565b60096102e6565b6040808201519051339180156108fc02916000818181858888f19350505050158015610217573d6000803e3d6000fd5b5061022f816020015182600001518360600151610324565b6000808055600181905561024590600290610523565b5050565b60006060600054600280805461025e906105fb565b80601f016020809104026020016040519081016040528092919081815260200182805461028a906105fb565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b50505050509050915091509091565b816102455760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061031a8385308561033d565b90505b9392505050565b61032f838383610417565b61033857600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916103a4916106ff565b60006040518083038185875af1925050503d80600081146103e1576040519150601f19603f3d011682016040523d82523d6000602084013e6103e6565b606091505b50915091506103f7828260016104e8565b508080602001905181019061040c919061071b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610476916106ff565b60006040518083038185875af1925050503d80600081146104b3576040519150601f19603f3d011682016040523d82523d6000602084013e6104b8565b606091505b50915091506104c9828260026104e8565b50808060200190518101906104de919061071b565b9695505050505050565b606083156104f757508161031d565b8251156105075782518084602001fd5b60405163100960cb60e01b815260048101839052602401610303565b50805461052f906105fb565b6000825580601f1061053f575050565b601f01602090049060005260206000209081019061055d9190610560565b50565b5b808211156105755760008155600101610561565b5090565b60006040828403121561058b57600080fd5b50919050565b60005b838110156105ac578181015183820152602001610594565b838111156105bb576000848401525b50505050565b82815260406020820152600082518060408401526105e6816060850160208701610591565b601f01601f1916919091016060019392505050565b600181811c9082168061060f57607f821691505b6020821081141561058b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461064757600080fd5b919050565b60006080828403121561065e57600080fd5b6040516080810181811067ffffffffffffffff8211171561068f57634e487b7160e01b600052604160045260246000fd5b60405261069b83610630565b81526106a960208401610630565b602082015260408301516040820152606083015160608201528091505092915050565b801515811461055d57600080fd5b813581526040810160208301356106f0816106cc565b80151560208401525092915050565b60008251610711818460208701610591565b9190910192915050565b60006020828403121561072d57600080fd5b815161031d816106cc56fea2646970667358221220280ad6e25b066bc10f03234e609f488a68e97ccc838c9fa30ce1f9629bb8a0bc64736f6c63430008090033`,
  BytecodeLen: 2700,
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
