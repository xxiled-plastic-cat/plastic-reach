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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0],
      2: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc0],
      3: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc0, ctc1],
      9: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
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
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc2, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214, v215], secs: v217, time: v216, didSend: v38, from: v210 } = txn1;
  ;
  ;
  const v219 = v214;
  const txn2 = await (ctc.sendrecv({
    args: [v210, v211, v212, v213, v215, v219],
    evt_cnt: 0,
    funcNum: 1,
    lct: v216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v222, time: v221, didSend: v44, from: v220 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:40:11:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v44, from: v220 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v226, time: v225, didSend: v52, from: v224 } = txn3;
  ;
  ;
  const v230 = stdlib.addressEq(v210, v224);
  stdlib.assert(v230, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v233, time: v232, didSend: v59, from: v231 } = txn4;
  ;
  const v236 = stdlib.addressEq(v210, v231);
  stdlib.assert(v236, {
    at: './index.rsh:49:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v238 = stdlib.add(v225, v215);
  let v239 = stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, 0);
  let v240 = v232;
  let v246 = stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1);
  let v247 = v212;
  
  while (await (async () => {
    const v251 = stdlib.lt(v239, v212);
    
    return v251;})()) {
    const v260 = stdlib.protect(ctc4, await interact.getPayment(), {
      at: './index.rsh:58:73:application',
      fs: ['at ./index.rsh:57:14:application call to [unknown function] (defined at: ./index.rsh:57:14:function exp)', 'at ./index.rsh:57:14:application call to [unknown function] (defined at: ./index.rsh:57:14:function exp)'],
      msg: 'getPayment',
      who: 'Buyer'
      });
    let v261;
    switch (v260[0]) {
      case 'None': {
        const v262 = v260[1];
        v261 = false;
        
        break;
        }
      case 'Some': {
        const v263 = v260[1];
        const v264 = stdlib.eq(v263, v211);
        v261 = v264;
        
        break;
        }
      }
    let v265;
    switch (v260[0]) {
      case 'None': {
        const v266 = v260[1];
        v265 = stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v267 = v260[1];
        v265 = v267;
        
        break;
        }
      }
    
    const txn5 = await (ctc.sendrecv({
      args: [v210, v211, v212, v213, v219, v220, v238, v239, v246, v247, v265],
      evt_cnt: 1,
      funcNum: 5,
      lct: v240,
      onlyIf: v261,
      out_tys: [ctc0],
      pay: [v265, []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v270], secs: v272, time: v271, didSend: v124, from: v269 } = txn5;
        
        const v275 = stdlib.add(v246, v270);
        sim_r.txns.push({
          amt: v270,
          kind: 'to',
          tok: undefined
          });
        const v276 = stdlib.addressEq(v220, v269);
        stdlib.assert(v276, {
          at: './index.rsh:53:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Buyer'
          });
        const v277 = stdlib.eq(v270, v211);
        stdlib.assert(v277, {
          at: './index.rsh:67:20:application',
          fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
          msg: null,
          who: 'Buyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v238],
      tys: [ctc2, ctc0, ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v210, v211, v212, v213, v219, v220, v238, v239, v246, v247],
        evt_cnt: 0,
        funcNum: 6,
        lct: v240,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v304 = stdlib.addressEq(v220, v300);
          const v305 = stdlib.addressEq(v210, v300);
          const v306 = v304 ? true : v305;
          const v307 = stdlib.addressEq(v219, v300);
          const v308 = v306 ? true : v307;
          stdlib.assert(v308, {
            at: './index.rsh:53:21:dot',
            fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
            msg: 'sender correct',
            who: 'Buyer'
            });
          const cv239 = v239;
          const cv240 = v301;
          const cv246 = v246;
          const cv247 = v247;
          
          await (async () => {
            const v239 = cv239;
            const v240 = cv240;
            const v246 = cv246;
            const v247 = cv247;
            
            if (await (async () => {
              const v251 = stdlib.lt(v239, v212);
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
              if (v311) {
                sim_r.txns.push({
                  amt: v247,
                  kind: 'from',
                  to: v210,
                  tok: v213
                  });
                const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v318) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v333) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
      ;
      const v304 = stdlib.addressEq(v220, v300);
      const v305 = stdlib.addressEq(v210, v300);
      const v306 = v304 ? true : v305;
      const v307 = stdlib.addressEq(v219, v300);
      const v308 = v306 ? true : v307;
      stdlib.assert(v308, {
        at: './index.rsh:53:21:dot',
        fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const cv239 = v239;
      const cv240 = v301;
      const cv246 = v246;
      const cv247 = v247;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      }
    else {
      const {data: [v270], secs: v272, time: v271, didSend: v124, from: v269 } = txn5;
      const v275 = stdlib.add(v246, v270);
      ;
      const v276 = stdlib.addressEq(v220, v269);
      stdlib.assert(v276, {
        at: './index.rsh:53:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v277 = stdlib.eq(v270, v211);
      stdlib.assert(v277, {
        at: './index.rsh:67:20:application',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const txn6 = await (ctc.sendrecv({
        args: [v210, v211, v212, v213, v219, v220, v238, v239, v247, v270, v275],
        evt_cnt: 0,
        funcNum: 7,
        lct: v271,
        onlyIf: true,
        out_tys: [],
        pay: [v211, []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v280, time: v279, didSend: v133, from: v278 } = txn6;
          
          const v282 = stdlib.add(v275, v211);
          sim_r.txns.push({
            amt: v211,
            kind: 'to',
            tok: undefined
            });
          const v283 = stdlib.addressEq(v220, v278);
          stdlib.assert(v283, {
            at: './index.rsh:69:19:dot',
            fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
            msg: 'sender correct',
            who: 'Buyer'
            });
          const v287 = stdlib.sub(v247, stdlib.checkedBigNumberify('./index.rsh:70:24:decimal', stdlib.UInt_max, 1));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:70:24:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v278,
            tok: v213
            });
          const v291 = stdlib.sub(v282, v270);
          sim_r.txns.push({
            amt: v270,
            kind: 'from',
            to: v219,
            tok: undefined
            });
          
          const cv239 = v297;
          const cv240 = v279;
          const cv246 = v291;
          const cv247 = v287;
          
          await (async () => {
            const v239 = cv239;
            const v240 = cv240;
            const v246 = cv246;
            const v247 = cv247;
            
            if (await (async () => {
              const v251 = stdlib.lt(v239, v212);
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
              if (v311) {
                sim_r.txns.push({
                  amt: v247,
                  kind: 'from',
                  to: v210,
                  tok: v213
                  });
                const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v318) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v333) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v280, time: v279, didSend: v133, from: v278 } = txn6;
      const v282 = stdlib.add(v275, v211);
      ;
      const v283 = stdlib.addressEq(v220, v278);
      stdlib.assert(v283, {
        at: './index.rsh:69:19:dot',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v287 = stdlib.sub(v247, stdlib.checkedBigNumberify('./index.rsh:70:24:decimal', stdlib.UInt_max, 1));
      ;
      const v291 = stdlib.sub(v282, v270);
      ;
      const v297 = stdlib.add(v239, stdlib.checkedBigNumberify('./index.rsh:72:76:decimal', stdlib.UInt_max, 1));
      stdlib.protect(ctc3, await interact.saleComplete(v297), {
        at: './index.rsh:72:64:application',
        fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:38:function exp)', 'at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: 'saleComplete',
        who: 'Buyer'
        });
      
      const cv239 = v297;
      const cv240 = v279;
      const cv246 = v291;
      const cv247 = v287;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      
      }
    
    }
  const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
  if (v311) {
    ;
    const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v318) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v333) {
      ;
      return;
      }
    else {
      return;
      }}
  
  
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const v202 = stdlib.protect(ctc0, interact.vaultAddr, 'for Seller\'s interact field vaultAddr');
  
  const v205 = stdlib.protect(ctc3, await interact.getMerchParams(), {
    at: './index.rsh:32:74:application',
    fs: ['at ./index.rsh:31:16:application call to [unknown function] (defined at: ./index.rsh:31:20:function exp)'],
    msg: 'getMerchParams',
    who: 'Seller'
    });
  const v206 = v205[stdlib.checkedBigNumberify('./index.rsh:32:13:array', stdlib.UInt_max, 0)];
  const v207 = v205[stdlib.checkedBigNumberify('./index.rsh:32:13:array', stdlib.UInt_max, 1)];
  const v208 = v205[stdlib.checkedBigNumberify('./index.rsh:32:13:array', stdlib.UInt_max, 2)];
  const v209 = stdlib.protect(ctc1, await interact.getDeadline(), {
    at: './index.rsh:34:49:application',
    fs: ['at ./index.rsh:31:16:application call to [unknown function] (defined at: ./index.rsh:31:20:function exp)'],
    msg: 'getDeadline',
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v206, v207, v208, v202, v209],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc2, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v211, v212, v213, v214, v215], secs: v217, time: v216, didSend: v38, from: v210 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v213
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:37:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v219 = v214;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc1, ctc2, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214, v215], secs: v217, time: v216, didSend: v38, from: v210 } = txn1;
  ;
  ;
  const v219 = v214;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v44, from: v220 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v210, v211, v212, v213, v215, v219, v220],
    evt_cnt: 0,
    funcNum: 2,
    lct: v221,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, 0), [[v212, v213]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v226, time: v225, didSend: v52, from: v224 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:46:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v212,
        kind: 'to',
        tok: v213
        });
      const v230 = stdlib.addressEq(v210, v224);
      stdlib.assert(v230, {
        at: './index.rsh:46:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v226, time: v225, didSend: v52, from: v224 } = txn3;
  ;
  ;
  const v230 = stdlib.addressEq(v210, v224);
  stdlib.assert(v230, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v210, v211, v212, v213, v215, v219, v220, v225],
    evt_cnt: 0,
    funcNum: 3,
    lct: v225,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v233, time: v232, didSend: v59, from: v231 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: undefined
        });
      const v236 = stdlib.addressEq(v210, v231);
      stdlib.assert(v236, {
        at: './index.rsh:49:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v238 = stdlib.add(v225, v215);
      const v239 = stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, 0);
      const v240 = v232;
      const v246 = stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1);
      const v247 = v212;
      
      if (await (async () => {
        const v251 = stdlib.lt(v239, v212);
        
        return v251;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
        if (v311) {
          sim_r.txns.push({
            amt: v247,
            kind: 'from',
            to: v210,
            tok: v213
            });
          const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
          if (v318) {
            sim_r.txns.push({
              amt: v246,
              kind: 'from',
              to: v210,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v213
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v213
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        else {
          const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
          if (v333) {
            sim_r.txns.push({
              amt: v246,
              kind: 'from',
              to: v210,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v213
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v213
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v233, time: v232, didSend: v59, from: v231 } = txn4;
  ;
  const v236 = stdlib.addressEq(v210, v231);
  stdlib.assert(v236, {
    at: './index.rsh:49:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v238 = stdlib.add(v225, v215);
  let v239 = stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, 0);
  let v240 = v232;
  let v246 = stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1);
  let v247 = v212;
  
  while (await (async () => {
    const v251 = stdlib.lt(v239, v212);
    
    return v251;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc1],
      timeoutAt: ['time', v238],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v210, v211, v212, v213, v219, v220, v238, v239, v246, v247],
        evt_cnt: 0,
        funcNum: 6,
        lct: v240,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v304 = stdlib.addressEq(v220, v300);
          const v305 = stdlib.addressEq(v210, v300);
          const v306 = v304 ? true : v305;
          const v307 = stdlib.addressEq(v219, v300);
          const v308 = v306 ? true : v307;
          stdlib.assert(v308, {
            at: './index.rsh:53:21:dot',
            fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
            msg: 'sender correct',
            who: 'Seller'
            });
          const cv239 = v239;
          const cv240 = v301;
          const cv246 = v246;
          const cv247 = v247;
          
          await (async () => {
            const v239 = cv239;
            const v240 = cv240;
            const v246 = cv246;
            const v247 = cv247;
            
            if (await (async () => {
              const v251 = stdlib.lt(v239, v212);
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
              if (v311) {
                sim_r.txns.push({
                  amt: v247,
                  kind: 'from',
                  to: v210,
                  tok: v213
                  });
                const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v318) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v333) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
      ;
      const v304 = stdlib.addressEq(v220, v300);
      const v305 = stdlib.addressEq(v210, v300);
      const v306 = v304 ? true : v305;
      const v307 = stdlib.addressEq(v219, v300);
      const v308 = v306 ? true : v307;
      stdlib.assert(v308, {
        at: './index.rsh:53:21:dot',
        fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv239 = v239;
      const cv240 = v301;
      const cv246 = v246;
      const cv247 = v247;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      }
    else {
      const {data: [v270], secs: v272, time: v271, didSend: v124, from: v269 } = txn5;
      const v275 = stdlib.add(v246, v270);
      ;
      const v276 = stdlib.addressEq(v220, v269);
      stdlib.assert(v276, {
        at: './index.rsh:53:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v277 = stdlib.eq(v270, v211);
      stdlib.assert(v277, {
        at: './index.rsh:67:20:application',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: null,
        who: 'Seller'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v280, time: v279, didSend: v133, from: v278 } = txn6;
      const v282 = stdlib.add(v275, v211);
      ;
      const v283 = stdlib.addressEq(v220, v278);
      stdlib.assert(v283, {
        at: './index.rsh:69:19:dot',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v287 = stdlib.sub(v247, stdlib.checkedBigNumberify('./index.rsh:70:24:decimal', stdlib.UInt_max, 1));
      ;
      const v291 = stdlib.sub(v282, v270);
      ;
      const v294 = stdlib.add(v239, stdlib.checkedBigNumberify('./index.rsh:72:76:decimal', stdlib.UInt_max, 1));
      stdlib.protect(ctc4, await interact.saleComplete(v294), {
        at: './index.rsh:72:64:application',
        fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:38:function exp)', 'at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: 'saleComplete',
        who: 'Seller'
        });
      
      const cv239 = v294;
      const cv240 = v279;
      const cv246 = v291;
      const cv247 = v287;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      
      }
    
    }
  const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
  if (v311) {
    ;
    const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v318) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v333) {
      ;
      return;
      }
    else {
      return;
      }}
  
  
  
  
  
  
  
  };
export async function Vault(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Vault expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Vault expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc2, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214, v215], secs: v217, time: v216, didSend: v38, from: v210 } = txn1;
  ;
  ;
  const v219 = ctc.iam(v214);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v44, from: v220 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v226, time: v225, didSend: v52, from: v224 } = txn3;
  ;
  ;
  const v230 = stdlib.addressEq(v210, v224);
  stdlib.assert(v230, {
    at: './index.rsh:46:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Vault'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v233, time: v232, didSend: v59, from: v231 } = txn4;
  ;
  const v236 = stdlib.addressEq(v210, v231);
  stdlib.assert(v236, {
    at: './index.rsh:49:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Vault'
    });
  const v238 = stdlib.add(v225, v215);
  let v239 = stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, 0);
  let v240 = v232;
  let v246 = stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 1);
  let v247 = v212;
  
  while (await (async () => {
    const v251 = stdlib.lt(v239, v212);
    
    return v251;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: ['time', v238],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v210, v211, v212, v213, v219, v220, v238, v239, v246, v247],
        evt_cnt: 0,
        funcNum: 6,
        lct: v240,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:53:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v304 = stdlib.addressEq(v220, v300);
          const v305 = stdlib.addressEq(v210, v300);
          const v306 = v304 ? true : v305;
          const v307 = stdlib.addressEq(v219, v300);
          const v308 = v306 ? true : v307;
          stdlib.assert(v308, {
            at: './index.rsh:53:21:dot',
            fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
            msg: 'sender correct',
            who: 'Vault'
            });
          const cv239 = v239;
          const cv240 = v301;
          const cv246 = v246;
          const cv247 = v247;
          
          await (async () => {
            const v239 = cv239;
            const v240 = cv240;
            const v246 = cv246;
            const v247 = cv247;
            
            if (await (async () => {
              const v251 = stdlib.lt(v239, v212);
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
              if (v311) {
                sim_r.txns.push({
                  amt: v247,
                  kind: 'from',
                  to: v210,
                  tok: v213
                  });
                const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v318) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
                if (v333) {
                  sim_r.txns.push({
                    amt: v246,
                    kind: 'from',
                    to: v210,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v213
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v302, time: v301, didSend: v173, from: v300 } = txn6;
      ;
      const v304 = stdlib.addressEq(v220, v300);
      const v305 = stdlib.addressEq(v210, v300);
      const v306 = v304 ? true : v305;
      const v307 = stdlib.addressEq(v219, v300);
      const v308 = v306 ? true : v307;
      stdlib.assert(v308, {
        at: './index.rsh:53:21:dot',
        fs: ['at ./index.rsh:75:25:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
        msg: 'sender correct',
        who: 'Vault'
        });
      const cv239 = v239;
      const cv240 = v301;
      const cv246 = v246;
      const cv247 = v247;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      }
    else {
      const {data: [v270], secs: v272, time: v271, didSend: v124, from: v269 } = txn5;
      const v275 = stdlib.add(v246, v270);
      ;
      const v276 = stdlib.addressEq(v220, v269);
      stdlib.assert(v276, {
        at: './index.rsh:53:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Vault'
        });
      const v277 = stdlib.eq(v270, v211);
      stdlib.assert(v277, {
        at: './index.rsh:67:20:application',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: null,
        who: 'Vault'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v280, time: v279, didSend: v133, from: v278 } = txn6;
      const v282 = stdlib.add(v275, v211);
      ;
      const v283 = stdlib.addressEq(v220, v278);
      stdlib.assert(v283, {
        at: './index.rsh:69:19:dot',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
        msg: 'sender correct',
        who: 'Vault'
        });
      const v287 = stdlib.sub(v247, stdlib.checkedBigNumberify('./index.rsh:70:24:decimal', stdlib.UInt_max, 1));
      ;
      const v291 = stdlib.sub(v282, v270);
      ;
      const v298 = stdlib.add(v239, stdlib.checkedBigNumberify('./index.rsh:73:30:decimal', stdlib.UInt_max, 1));
      const cv239 = v298;
      const cv240 = v279;
      const cv246 = v291;
      const cv247 = v287;
      
      v239 = cv239;
      v240 = cv240;
      v246 = cv246;
      v247 = cv247;
      
      continue;
      
      }
    
    }
  const v311 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:79:33:decimal', stdlib.UInt_max, 0));
  if (v311) {
    ;
    const v318 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v318) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v333 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, 0));
    if (v333) {
      ;
      return;
      }
    else {
      return;
      }}
  
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `BSATAAEEICgwCAUDOIABeAIJiAGQARCgjQYKJgIBAQAxIDIDEkQxBjIDEkQiNQAxGEEH/ylkSSJbNQEhBls1AjEbIQgSRDYaABdJIhJBAQ9IIjQBEkQ2GgEXSSISTDQCEhFEKUg2GgJJFYFAEkRJIls1/0khBls1/kkhEFs1/UlXGCA1/EkhCVs1+0iABDEyZDA0/xZQNP4WUDT9FlA0/FA0+xZQsCERSUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRIIRFJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREgisbISJLIQMgqyFDT9shGzIkg0/DX6MQA0/xZQNP4WUDT9FlA0+xZQNPpQI69LAVcAYGdIIzUBMgY1AjEZIhJEQgazSSMSQQCCSCM0ARJENhoBF0kiEkw0AhIRRCOvZElXACA1/0klWzX+SSEEWzX9SSEFWzX8SSEJWzX7SVdAIDX6SDYaAkkVIhJESIAEOWE4YrA0/zT+FlA0/RZQNPwWUDT7FlA0+lAxAFAjr0sBVwB/ZyhLAVd/AWdIIQw1ATIGNQIxGSISREIGK0khDBJBANlIIQw0ARJENhoBF0kiEkw0AhIRRCOvZChkUElXACA1/0klWzX+SSEEWzX9SSEFWzX8SSEJWzX7SVdAIDX6SVdgIDX5SDYaAkkVIhJESIAENDFiMbA0/UlBADw0AEkjCDUATEsBOBISRDT8SwE4ERJEJEsBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgUEkRINP8xABJENP80/hZQNP0WUDT8FlA0+xZQNPpQNPlQMgYWUCOvSwFXAH9nKEsBV38JZ0ghCDUBMgY1AjEZIhJEQgVLSSEIEkEAzkghCDQBEkQ2GgEXSSISTDQCEhFEI69kKGRQSVcAIDX/SSVbNf5JIQRbNf1JIQVbNfxJIQlbNftJV0AgNfpJV2AgNflJIQpbNfhINhoCSRUiEkRIgARhNzY1sCNJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREg0/zEAEkQ0/zT+FlA0/RZQNPwWUDT6UDT5UDT4NPsIFlAhBq8yBhZQgAgAAAAAAAAAAVA0/RZQQgLVSSEHEkEBC0ghDTQBEkQ2GgEXSSISTDQCEhFEI69kKGRQSVcAIDX/SSVbNf5JIQRbNf1JIQVbNfxJVzggNftJV1ggNfpJIQtbNflJIQpbNfhJIQ5bNfdJIQ9bNfZINhoCSRUhBhJESRc19UiABDgxYWE09RZQsDIGNPkMRDT3NPUINfQ09UlBADQ0AEkjCDUATEsBOAgSRCNLATgQEkQiSwE4ARJEMgNLATgGEkQyA0sBOCASRDIKSwE4BxJESDT6MQASRDT1NP4SRDT/NP4WUDT9FlA0/BZQNPtQNPpQNPkWUDT4FlA09hZQNPUWUDT0FlAjr0sBVwB/ZyhLAVd/IWdIIRI1ATIGNQIxGSISREIDZEmBBhJBAKhIIQ00ARJENhoBF0kiEkw0AhIRRCOvZChkUElXACA1/0klWzX+SSEEWzX9SSEFWzX8SVc4IDX7SVdYIDX6SSELWzX5SSEKWzX4SSEOWzX3SSEPWzX2SDYaAkkVIhJESIAENjFiNLAyBjT5D0Q0+jEAEjT/MQASETT7MQASEUQ0/zT+FlA0/RZQNPwWUDT7UDT6UDT5FlA0+BYyBhZQNPcWUDT2FlBCARRJgQcSQQELSCESNAESRDYaARdJIhJMNAISEUQjr2QoZFBJVwAgNf9JJVs1/kkhBFs1/UkhBVs1/ElXOCA1+0lXWCA1+kkhC1s1+UkhCls1+EkhDls190khD1s19kmBmAFbNfVINhoCSRUiEkRIgARlMjFisDT+SUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRINPoxABJEI0lBABCxshIkshAxALIUNPyyEbMiSDT2SUEADLGyCCOyEDT7sgezIkg0/zT+FlA0/RZQNPwWUDT7UDT6UDT5FlA0+CMIFjIGFlA09TT+CDT2CRZQNPcjCRZQQgACIkRJIls1/0khBls1/kkhEFs1/UmBGFs1/EhJVwAgNftJJVs1+kkhBFs1+UkhBVs1+ElXOCA190lXWCA19kkhC1s19Ug0/zT5DEEARDT7NPoWUDT5FlA0+BZQNPdQNPZQNPUWUDT/FlA0/RZQNPwWUCOvSwFXAH9nKEsBV38ZZ0ghDTUBMgY1AjEZIhJEQgETNPwiDUEAkzT8SUEAELGyEiSyEDT7shQ0+LIRsyJINP0iDUEARDT9SUEADLGyCCOyEDT7sgezIkgisbISJLIQMgmyFTIKshQ0+LIRsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkhBxJEQgCqIrGyEiSyEDIJshUyCrIUNPiyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZIQcSREIAeTT9Ig1BAEQ0/UlBAAyxsggjshA0+7IHsyJIIrGyEiSyEDIJshUyCrIUNPiyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZIQcSREIALiKxshIkshAyCbIVMgqyFDT4shGzIkgisbIII7IQMgmyCTIKsgezIkgxGSEHEkQpNAEWNAIWUGc0AElJIwgyBBJEMRYSRIHoBwsxAQ5EI0MxGSISRCI1ASI1AkL/0Q==`,
  appClear: `BYEA`,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
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
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v213",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v214",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v215",
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
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v213",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v214",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v215",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001fd438038062001fd48339810160408190526200002691620002ef565b6000808055436003556040805160208082018352928152815184518152848401518051828601529384015181840152918301516001600160a01b03908116606080850191909152840151166080808401919091529092015160a08201527fd209a2350d0e82f6525d9dcee0d7b0a7da32fac0fe40e248c7572cadebfd48dd9060c00160405180910390a1620000be34156007620001cb565b6020808301516060908101516001600160a01b031683526040805160c08101825260008082529381018490529081018390529081018290526080810182905260a08101919091523380825260208481018051518285019081528151830151604080870191825283518101516001600160a01b039081166060808a019182529551608090810151818b019081528b51841660a0808d019182526001600081905543905586519a8b019b909b5296519489019490945293519587019590955293518416918501919091525193830193909352915190911660c082015260e00160405160208183030381529060405260029080519060200190620001c1929190620001f5565b50505050620003e5565b81620001f15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200020390620003a8565b90600052602060002090601f01602090048101928262000227576000855562000272565b82601f106200024257805160ff191683800117855562000272565b8280016001018555821562000272579182015b828111156200027257825182559160200191906001019062000255565b506200028092915062000284565b5090565b5b8082111562000280576000815560010162000285565b60405160a081016001600160401b0381118282101715620002cc57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002ea57600080fd5b919050565b600081830360c08112156200030357600080fd5b604080519081016001600160401b03811182821017156200033457634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200034e57600080fd5b620003586200029b565b915060208401518252604084015160208301526200037960608501620002d2565b60408301526200038c60808501620002d2565b606083015260a093909301516080820152602083015250919050565b600181811c90821680620003bd57607f821691505b60208210811415620003df57634e487b7160e01b600052602260045260246000fd5b50919050565b611bdf80620003f56000396000f3fe6080604052600436106100845760003560e01c80637eea518c116100565780637eea518c146100ea57806383230757146100fd578063ab53f2c614610112578063bf2c5b2414610135578063c79800371461014857005b80631e93b0f11461008d5780632c10a159146100b1578063552d7b8e146100c457806373b4522c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611517565b61015b565b61008b6100d2366004611517565b610373565b61008b6100e5366004611517565b61063d565b61008b6100f8366004611517565b610817565b34801561010957600080fd5b5060015461009e565b34801561011e57600080fd5b50610127610a76565b6040516100a892919061155f565b61008b610143366004611517565b610b13565b61008b610156366004611517565b610d72565b61016b6001600054146009610f86565b6101858135158061017e57506001548235145b600a610f86565b60008080556002805461019790611599565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390611599565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190611654565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161025991906116fa565b60405180910390a161026d34156008610f86565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915281516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b0190815260a0808d01518b16818d019081523360c0808f0191825260026000554360015589519b8c019c909c529851978a01979097529451938801939093529051881690860152519084015251841692820192909252905190911660e0820152610100015b6040516020818303038152906040526002908051906020019061036d9291906113b9565b50505050565b6103836009600054146017610f86565b61039d8135158061039657506001548235145b6018610f86565b6000808055600280546103af90611599565b80601f01602080910402602001604051908101604052809291908181526020018280546103db90611599565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b5050505050806020019051810190610440919061171f565b90506104586040518060200160405280600081525090565b6104698260c0015143106019610f86565b6040805184358152602080860135908201527f4dadf1945cf19fcec67ccb7e31757a1ad0bc533fae9b7a76582523cb8bf28f4e910160405180910390a16101008201516104bb906020850135906117d5565b81526104ce346020850135146014610f86565b60a08201516104e9906001600160a01b031633146015610f86565b6020808301516104fe91850135146016610f86565b61057f60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b039081168252602080850151818401526040808601518185015260608087015184169085015260808087015184169085015260a0808701519093169284019290925260c0808601519084015260e080860151908401526101208086015161010085015286820135908401528351610140840152600a600055436001559051610612918391016117ed565b604051602081830303815290604052600290805190602001906106369291906113b9565b5050505050565b61064d6003600054146012610f86565b6106678135158061066057506001548235145b6013610f86565b60008080556002805461067990611599565b80601f01602080910402602001604051908101604052809291908181526020018280546106a590611599565b80156106f25780601f106106c7576101008083540402835291602001916106f2565b820191906000526020600020905b8154815290600101906020018083116106d557829003601f168201915b505050505080602001905181019061070a91906118a2565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c098260405161073b91906116fa565b60405180910390a1610751600134146010610f86565b8051610769906001600160a01b031633146011610f86565b61077161143d565b815181516001600160a01b039182169052602080840151835190910152604080840151835190910152606080840151835190831691015260a080840151835190831660809182015260c085015184519316929091019190915282015160e08301516107dc91906117d5565b815160c0015260208082018051600090528051439201919091528051600160409182015283015190516060015261081281610fb0565b505050565b610827600260005414600e610f86565b6108418135158061083a57506001548235145b600f610f86565b60008080556002805461085390611599565b80601f016020809104026020016040519081016040528092919081815260200182805461087f90611599565b80156108cc5780601f106108a1576101008083540402835291602001916108cc565b820191906000526020600020905b8154815290600101906020018083116108af57829003601f168201915b50505050508060200190518101906108e4919061195c565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161091591906116fa565b60405180910390a16109293415600b610f86565b61094661093f33836060015184604001516111a7565b600c610f86565b805161095e906001600160a01b03163314600d610f86565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915281516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a08086015184169085015260c080860151909316928401929092524360e08401819052600360005560015590516103499183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152608084015160808401528060a08501511660a08401528060c08501511660c08401525060e083015160e083015292915050565b600060606000546002808054610a8b90611599565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790611599565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b50505050509050915091509091565b610b23600a600054146021610f86565b610b3d81351580610b3657506001548235145b6022610f86565b600080805560028054610b4f90611599565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b90611599565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050505050806020019051810190610be09190611a05565b90507fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610c1191906116fa565b60405180910390a1610c2a81602001513414601f610f86565b60a0810151610c45906001600160a01b031633146020610f86565b610c5581606001513360016111bf565b80608001516001600160a01b03166108fc8261012001519081150290604051600060405180830381858888f19350505050158015610c97573d6000803e3d6000fd5b50610ca061143d565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351908316910152608080840151835190831691015260a0808401518351921691015260c08083015182519091015260e0820151610d0f906001906117d5565b60208083018051929092529051439082015261012083015190830151610140840151610d3b91906117d5565b610d459190611ab0565b602082015160400152610100820151610d6090600190611ab0565b60208201516060015261081281610fb0565b610d82600960005414601c610f86565b610d9c81351580610d9557506001548235145b601d610f86565b600080805560028054610dae90611599565b80601f0160208091040260200160405190810160405280929190818152602001828054610dda90611599565b8015610e275780601f10610dfc57610100808354040283529160200191610e27565b820191906000526020600020905b815481529060010190602001808311610e0a57829003601f168201915b5050505050806020019051810190610e3f919061171f565b9050610e538160c00151431015601e610f86565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275982604051610e8291906116fa565b60405180910390a1610e963415601a610f86565b60a0810151610ee6906001600160a01b03163314610ec05781516001600160a01b03163314610ec3565b60015b610edc5760808201516001600160a01b03163314610edf565b60015b601b610f86565b610eee61143d565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190851690820152608080870151865190861691015260a0808701518651951694019390935260c08086015185519091015260e085015182850180519190915280514393019290925261010085015182519091015261012084015190519091015261081281610fb0565b81610fac5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b80516040015160208201515110156110fa5761103c60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b03908116825282516020908101518184015283516040908101518185015284516060908101518416818601528551608090810151851690860152855160a09081015190941693850193909352845160c0908101519085015281850180515160e08601528051820151610100860152519092015161012084015260096000554360015590516110d691839101611ac7565b604051602081830303815290604052600290805190602001906108129291906113b9565b6020810151606001511561112657805160608082015191516020840151909101516111269291906111bf565b6020810151604001511561119157805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611177573d6000803e3d6000fd5b506000808055600181905561118e906002906114b4565b50565b6000808055600181905561118e906002906114b4565b60006111b5838530856111d3565b90505b9392505050565b6111ca8383836112ad565b61081257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161123a91611b70565b60006040518083038185875af1925050503d8060008114611277576040519150601f19603f3d011682016040523d82523d6000602084013e61127c565b606091505b509150915061128d8282600161137e565b50808060200190518101906112a29190611b8c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161130c91611b70565b60006040518083038185875af1925050503d8060008114611349576040519150601f19603f3d011682016040523d82523d6000602084013e61134e565b606091505b509150915061135f8282600261137e565b50808060200190518101906113749190611b8c565b9695505050505050565b6060831561138d5750816111b8565b82511561139d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610fa3565b8280546113c590611599565b90600052602060002090601f0160209004810192826113e7576000855561142d565b82601f1061140057805160ff191683800117855561142d565b8280016001018555821561142d579182015b8281111561142d578251825591602001919060010190611412565b506114399291506114ea565b5090565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925290819081526020016114af6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b5080546114c090611599565b6000825580601f106114d0575050565b601f01602090049060005260206000209081019061118e91905b5b8082111561143957600081556001016114eb565b60006040828403121561151157600080fd5b50919050565b60006040828403121561152957600080fd5b6111b883836114ff565b60005b8381101561154e578181015183820152602001611536565b8381111561036d5750506000910152565b8281526040602082015260008251806040840152611584816060850160208701611533565b601f01601f1916919091016060019392505050565b600181811c908216806115ad57607f821691505b6020821081141561151157634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561160057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff8111828210171561160057634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461164f57600080fd5b919050565b600060c0828403121561166657600080fd5b60405160c0810181811067ffffffffffffffff8211171561169757634e487b7160e01b600052604160045260246000fd5b6040526116a383611638565b815260208301516020820152604083015160408201526116c560608401611638565b6060820152608083015160808201526116e060a08401611638565b60a08201529392505050565b801515811461118e57600080fd5b81358152604081016020830135611710816116ec565b80151560208401525092915050565b6000610140828403121561173257600080fd5b61173a6115ce565b61174383611638565b8152602083015160208201526040830151604082015261176560608401611638565b606082015261177660808401611638565b608082015261178760a08401611638565b60a082015260c0838101519082015260e080840151908201526101008084015190820152610120928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117e8576117e86117bf565b500190565b81516001600160a01b0316815261016081016020830151602083015260408301516040830152606083015161182d60608401826001600160a01b03169052565b50608083015161184860808401826001600160a01b03169052565b5060a083015161186360a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b60006101008083850312156118b657600080fd5b6040519081019067ffffffffffffffff821181831017156118e757634e487b7160e01b600052604160045260246000fd5b816040526118f484611638565b8152602084015160208201526040840151604082015261191660608501611638565b60608201526080840151608082015261193160a08501611638565b60a082015261194260c08501611638565b60c082015260e084015160e0820152809250505092915050565b600060e0828403121561196e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561199f57634e487b7160e01b600052604160045260246000fd5b6040526119ab83611638565b815260208301516020820152604083015160408201526119cd60608401611638565b6060820152608083015160808201526119e860a08401611638565b60a08201526119f960c08401611638565b60c08201529392505050565b60006101608284031215611a1857600080fd5b611a20611606565b611a2983611638565b81526020830151602082015260408301516040820152611a4b60608401611638565b6060820152611a5c60808401611638565b6080820152611a6d60a08401611638565b60a082015260c0838101519082015260e0808401519082015261010080840151908201526101208084015190820152610140928301519281019290925250919050565b600082821015611ac257611ac26117bf565b500390565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611b0760608401826001600160a01b03169052565b506080830151611b2260808401826001600160a01b03169052565b5060a0830151611b3d60a08401826001600160a01b03169052565b5060c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60008251611b82818460208701611533565b9190910192915050565b600060208284031215611b9e57600080fd5b81516111b8816116ec56fea26469706673582212205d8a9add65d25bc5cb873d4f8a18b1b316467f46af17b030715c2a6a3ceb66bf64736f6c63430008090033`,
  BytecodeLen: 8148,
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
  "Buyer": Buyer,
  "Seller": Seller,
  "Vault": Vault
  };
export const _APIs = {
  };
