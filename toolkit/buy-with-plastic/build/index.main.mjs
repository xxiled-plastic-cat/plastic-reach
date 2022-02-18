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
      1: [ctc0, ctc1, ctc1, ctc2, ctc1],
      2: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0],
      3: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc1],
      9: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v205, v206, v207, v208], secs: v210, time: v209, didSend: v36, from: v204 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v204, v205, v206, v207, v208],
    evt_cnt: 0,
    funcNum: 1,
    lct: v209,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v214, time: v213, didSend: v41, from: v212 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:34:11:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v214, time: v213, didSend: v41, from: v212 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v218, time: v217, didSend: v49, from: v216 } = txn3;
  ;
  ;
  const v222 = stdlib.addressEq(v204, v216);
  stdlib.assert(v222, {
    at: './index.rsh:40:12:dot',
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
  const {data: [], secs: v225, time: v224, didSend: v56, from: v223 } = txn4;
  ;
  const v228 = stdlib.addressEq(v204, v223);
  stdlib.assert(v228, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v230 = stdlib.add(v217, v208);
  let v231 = stdlib.checkedBigNumberify('./index.rsh:47:22:decimal', stdlib.UInt_max, 0);
  let v232 = v224;
  let v238 = stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 1);
  let v239 = v206;
  
  while (await (async () => {
    const v243 = stdlib.lt(v231, v206);
    
    return v243;})()) {
    const v252 = stdlib.protect(ctc3, await interact.getPayment(), {
      at: './index.rsh:52:73:application',
      fs: ['at ./index.rsh:51:14:application call to [unknown function] (defined at: ./index.rsh:51:14:function exp)', 'at ./index.rsh:51:14:application call to [unknown function] (defined at: ./index.rsh:51:14:function exp)'],
      msg: 'getPayment',
      who: 'Buyer'
      });
    let v253;
    switch (v252[0]) {
      case 'None': {
        const v254 = v252[1];
        v253 = false;
        
        break;
        }
      case 'Some': {
        const v255 = v252[1];
        const v256 = stdlib.eq(v255, v205);
        v253 = v256;
        
        break;
        }
      }
    let v257;
    switch (v252[0]) {
      case 'None': {
        const v258 = v252[1];
        v257 = stdlib.checkedBigNumberify('./index.rsh:55:35:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v259 = v252[1];
        v257 = v259;
        
        break;
        }
      }
    
    const txn5 = await (ctc.sendrecv({
      args: [v204, v205, v206, v207, v212, v230, v231, v238, v239, v257],
      evt_cnt: 1,
      funcNum: 5,
      lct: v232,
      onlyIf: v253,
      out_tys: [ctc0],
      pay: [v257, []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v262], secs: v264, time: v263, didSend: v121, from: v261 } = txn5;
        
        const v267 = stdlib.add(v238, v262);
        sim_r.txns.push({
          amt: v262,
          kind: 'to',
          tok: undefined
          });
        const v268 = stdlib.addressEq(v212, v261);
        stdlib.assert(v268, {
          at: './index.rsh:47:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Buyer'
          });
        const v269 = stdlib.eq(v262, v205);
        stdlib.assert(v269, {
          at: './index.rsh:61:20:application',
          fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
          msg: null,
          who: 'Buyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v230],
      tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v204, v205, v206, v207, v212, v230, v231, v238, v239],
        evt_cnt: 0,
        funcNum: 6,
        lct: v232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:47:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v294, time: v293, didSend: v168, from: v292 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:47:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v296 = stdlib.addressEq(v212, v292);
          const v297 = stdlib.addressEq(v204, v292);
          const v298 = v296 ? true : v297;
          stdlib.assert(v298, {
            at: './index.rsh:47:21:dot',
            fs: ['at ./index.rsh:69:25:application call to [unknown function] (defined at: ./index.rsh:69:25:function exp)'],
            msg: 'sender correct',
            who: 'Buyer'
            });
          const cv231 = v231;
          const cv232 = v293;
          const cv238 = v238;
          const cv239 = v239;
          
          await (async () => {
            const v231 = cv231;
            const v232 = cv232;
            const v238 = cv238;
            const v239 = cv239;
            
            if (await (async () => {
              const v243 = stdlib.lt(v231, v206);
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
              if (v301) {
                sim_r.txns.push({
                  amt: v239,
                  kind: 'from',
                  to: v204,
                  tok: v207
                  });
                const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v308) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v323) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
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
        tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v294, time: v293, didSend: v168, from: v292 } = txn6;
      ;
      const v296 = stdlib.addressEq(v212, v292);
      const v297 = stdlib.addressEq(v204, v292);
      const v298 = v296 ? true : v297;
      stdlib.assert(v298, {
        at: './index.rsh:47:21:dot',
        fs: ['at ./index.rsh:69:25:application call to [unknown function] (defined at: ./index.rsh:69:25:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const cv231 = v231;
      const cv232 = v293;
      const cv238 = v238;
      const cv239 = v239;
      
      v231 = cv231;
      v232 = cv232;
      v238 = cv238;
      v239 = cv239;
      
      continue;
      }
    else {
      const {data: [v262], secs: v264, time: v263, didSend: v121, from: v261 } = txn5;
      const v267 = stdlib.add(v238, v262);
      ;
      const v268 = stdlib.addressEq(v212, v261);
      stdlib.assert(v268, {
        at: './index.rsh:47:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v269 = stdlib.eq(v262, v205);
      stdlib.assert(v269, {
        at: './index.rsh:61:20:application',
        fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const txn6 = await (ctc.sendrecv({
        args: [v204, v205, v206, v207, v212, v230, v231, v239, v262, v267],
        evt_cnt: 0,
        funcNum: 7,
        lct: v263,
        onlyIf: true,
        out_tys: [],
        pay: [v205, []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v272, time: v271, didSend: v130, from: v270 } = txn6;
          
          const v274 = stdlib.add(v267, v205);
          sim_r.txns.push({
            amt: v205,
            kind: 'to',
            tok: undefined
            });
          const v275 = stdlib.addressEq(v212, v270);
          stdlib.assert(v275, {
            at: './index.rsh:63:19:dot',
            fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
            msg: 'sender correct',
            who: 'Buyer'
            });
          const v279 = stdlib.sub(v239, stdlib.checkedBigNumberify('./index.rsh:64:24:decimal', stdlib.UInt_max, 1));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:64:24:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v270,
            tok: v207
            });
          const v283 = stdlib.sub(v274, v262);
          sim_r.txns.push({
            amt: v262,
            kind: 'from',
            to: v204,
            tok: undefined
            });
          
          const cv231 = v289;
          const cv232 = v271;
          const cv238 = v283;
          const cv239 = v279;
          
          await (async () => {
            const v231 = cv231;
            const v232 = cv232;
            const v238 = cv238;
            const v239 = cv239;
            
            if (await (async () => {
              const v243 = stdlib.lt(v231, v206);
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
              if (v301) {
                sim_r.txns.push({
                  amt: v239,
                  kind: 'from',
                  to: v204,
                  tok: v207
                  });
                const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v308) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v323) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
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
        tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v272, time: v271, didSend: v130, from: v270 } = txn6;
      const v274 = stdlib.add(v267, v205);
      ;
      const v275 = stdlib.addressEq(v212, v270);
      stdlib.assert(v275, {
        at: './index.rsh:63:19:dot',
        fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v279 = stdlib.sub(v239, stdlib.checkedBigNumberify('./index.rsh:64:24:decimal', stdlib.UInt_max, 1));
      ;
      const v283 = stdlib.sub(v274, v262);
      ;
      const v289 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:66:76:decimal', stdlib.UInt_max, 1));
      stdlib.protect(ctc2, await interact.saleComplete(v289), {
        at: './index.rsh:66:64:application',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:38:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'saleComplete',
        who: 'Buyer'
        });
      
      const cv231 = v289;
      const cv232 = v271;
      const cv238 = v283;
      const cv239 = v279;
      
      v231 = cv231;
      v232 = cv232;
      v238 = cv238;
      v239 = cv239;
      
      continue;
      
      }
    
    }
  const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
  if (v301) {
    ;
    const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
    if (v308) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
    if (v323) {
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v199 = stdlib.protect(ctc2, await interact.getMerchParams(), {
    at: './index.rsh:28:74:application',
    fs: ['at ./index.rsh:27:16:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)'],
    msg: 'getMerchParams',
    who: 'Seller'
    });
  const v200 = v199[stdlib.checkedBigNumberify('./index.rsh:28:13:array', stdlib.UInt_max, 0)];
  const v201 = v199[stdlib.checkedBigNumberify('./index.rsh:28:13:array', stdlib.UInt_max, 1)];
  const v202 = v199[stdlib.checkedBigNumberify('./index.rsh:28:13:array', stdlib.UInt_max, 2)];
  const v203 = stdlib.protect(ctc0, await interact.getDeadline(), {
    at: './index.rsh:29:49:application',
    fs: ['at ./index.rsh:27:16:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)'],
    msg: 'getDeadline',
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v200, v201, v202, v203],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v205, v206, v207, v208], secs: v210, time: v209, didSend: v36, from: v204 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v207
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v205, v206, v207, v208], secs: v210, time: v209, didSend: v36, from: v204 } = txn1;
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
  const {data: [], secs: v214, time: v213, didSend: v41, from: v212 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v204, v205, v206, v207, v208, v212],
    evt_cnt: 0,
    funcNum: 2,
    lct: v213,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:12:dot', stdlib.UInt_max, 0), [[v206, v207]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v218, time: v217, didSend: v49, from: v216 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:40:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v206,
        kind: 'to',
        tok: v207
        });
      const v222 = stdlib.addressEq(v204, v216);
      stdlib.assert(v222, {
        at: './index.rsh:40:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v218, time: v217, didSend: v49, from: v216 } = txn3;
  ;
  ;
  const v222 = stdlib.addressEq(v204, v216);
  stdlib.assert(v222, {
    at: './index.rsh:40:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v204, v205, v206, v207, v208, v212, v217],
    evt_cnt: 0,
    funcNum: 3,
    lct: v217,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 1), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v225, time: v224, didSend: v56, from: v223 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: undefined
        });
      const v228 = stdlib.addressEq(v204, v223);
      stdlib.assert(v228, {
        at: './index.rsh:43:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v230 = stdlib.add(v217, v208);
      const v231 = stdlib.checkedBigNumberify('./index.rsh:47:22:decimal', stdlib.UInt_max, 0);
      const v232 = v224;
      const v238 = stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 1);
      const v239 = v206;
      
      if (await (async () => {
        const v243 = stdlib.lt(v231, v206);
        
        return v243;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
        if (v301) {
          sim_r.txns.push({
            amt: v239,
            kind: 'from',
            to: v204,
            tok: v207
            });
          const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
          if (v308) {
            sim_r.txns.push({
              amt: v238,
              kind: 'from',
              to: v204,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v207
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
              tok: v207
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        else {
          const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
          if (v323) {
            sim_r.txns.push({
              amt: v238,
              kind: 'from',
              to: v204,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v207
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
              tok: v207
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
    tys: [ctc4, ctc0, ctc0, ctc1, ctc0, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v225, time: v224, didSend: v56, from: v223 } = txn4;
  ;
  const v228 = stdlib.addressEq(v204, v223);
  stdlib.assert(v228, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v230 = stdlib.add(v217, v208);
  let v231 = stdlib.checkedBigNumberify('./index.rsh:47:22:decimal', stdlib.UInt_max, 0);
  let v232 = v224;
  let v238 = stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 1);
  let v239 = v206;
  
  while (await (async () => {
    const v243 = stdlib.lt(v231, v206);
    
    return v243;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: ['time', v230],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v204, v205, v206, v207, v212, v230, v231, v238, v239],
        evt_cnt: 0,
        funcNum: 6,
        lct: v232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:47:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v294, time: v293, didSend: v168, from: v292 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:47:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v296 = stdlib.addressEq(v212, v292);
          const v297 = stdlib.addressEq(v204, v292);
          const v298 = v296 ? true : v297;
          stdlib.assert(v298, {
            at: './index.rsh:47:21:dot',
            fs: ['at ./index.rsh:69:25:application call to [unknown function] (defined at: ./index.rsh:69:25:function exp)'],
            msg: 'sender correct',
            who: 'Seller'
            });
          const cv231 = v231;
          const cv232 = v293;
          const cv238 = v238;
          const cv239 = v239;
          
          await (async () => {
            const v231 = cv231;
            const v232 = cv232;
            const v238 = cv238;
            const v239 = cv239;
            
            if (await (async () => {
              const v243 = stdlib.lt(v231, v206);
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
              if (v301) {
                sim_r.txns.push({
                  amt: v239,
                  kind: 'from',
                  to: v204,
                  tok: v207
                  });
                const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v308) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
                if (v323) {
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v204,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v207
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
                    tok: v207
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
        tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v294, time: v293, didSend: v168, from: v292 } = txn6;
      ;
      const v296 = stdlib.addressEq(v212, v292);
      const v297 = stdlib.addressEq(v204, v292);
      const v298 = v296 ? true : v297;
      stdlib.assert(v298, {
        at: './index.rsh:47:21:dot',
        fs: ['at ./index.rsh:69:25:application call to [unknown function] (defined at: ./index.rsh:69:25:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv231 = v231;
      const cv232 = v293;
      const cv238 = v238;
      const cv239 = v239;
      
      v231 = cv231;
      v232 = cv232;
      v238 = cv238;
      v239 = cv239;
      
      continue;
      }
    else {
      const {data: [v262], secs: v264, time: v263, didSend: v121, from: v261 } = txn5;
      const v267 = stdlib.add(v238, v262);
      ;
      const v268 = stdlib.addressEq(v212, v261);
      stdlib.assert(v268, {
        at: './index.rsh:47:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v269 = stdlib.eq(v262, v205);
      stdlib.assert(v269, {
        at: './index.rsh:61:20:application',
        fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
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
      const {data: [], secs: v272, time: v271, didSend: v130, from: v270 } = txn6;
      const v274 = stdlib.add(v267, v205);
      ;
      const v275 = stdlib.addressEq(v212, v270);
      stdlib.assert(v275, {
        at: './index.rsh:63:19:dot',
        fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v279 = stdlib.sub(v239, stdlib.checkedBigNumberify('./index.rsh:64:24:decimal', stdlib.UInt_max, 1));
      ;
      const v283 = stdlib.sub(v274, v262);
      ;
      const v286 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:66:76:decimal', stdlib.UInt_max, 1));
      stdlib.protect(ctc3, await interact.saleComplete(v286), {
        at: './index.rsh:66:64:application',
        fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:38:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'saleComplete',
        who: 'Seller'
        });
      
      const cv231 = v286;
      const cv232 = v271;
      const cv238 = v283;
      const cv239 = v279;
      
      v231 = cv231;
      v232 = cv232;
      v238 = cv238;
      v239 = cv239;
      
      continue;
      
      }
    
    }
  const v301 = stdlib.gt(v239, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, 0));
  if (v301) {
    ;
    const v308 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
    if (v308) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v323 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 0));
    if (v323) {
      ;
      return;
      }
    else {
      return;
      }}
  
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `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`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v207",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v208",
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
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v207",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v208",
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
                "name": "v262",
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
                "name": "v262",
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
  Bytecode: `0x608060405260405162001de038038062001de0833981016040819052620000269162000295565b600080554360035560408051825181526020808401518051828401529081015182840152808301516001600160a01b03166060808401919091520151608082015290517f035791c52c98944827aaaf5ce4e9deee1f74e3d7f7b9dc4c5310f0f23a9b40539181900360a00190a1620000a1341560076200018e565b620000e66040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b3380825260208381018051518285019081528151830151604080870191825283518101516001600160a01b039081166060808a0191825295518601516080808b01918252600160008190554390558451808a019a909a529551898501529351958801959095529351909316918501919091525160a0808501919091528151808503909101815260c09093019052815162000185926002920190620001b8565b50505062000386565b81620001b45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001c69062000349565b90600052602060002090601f016020900481019282620001ea576000855562000235565b82601f106200020557805160ff191683800117855562000235565b8280016001018555821562000235579182015b828111156200023557825182559160200191906001019062000218565b506200024392915062000247565b5090565b5b8082111562000243576000815560010162000248565b604051608081016001600160401b03811182821017156200028f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a0811215620002a957600080fd5b604080519081016001600160401b0381118282101715620002da57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002f457600080fd5b620002fe6200025e565b602085810151825260408601519082015260608501519092506001600160a01b03811681146200032d57600080fd5b6040830152608093909301516060820152602083015250919050565b600181811c908216806200035e57607f821691505b602082108114156200038057634e487b7160e01b600052602260045260246000fd5b50919050565b611a4a80620003966000396000f3fe6080604052600436106100845760003560e01c80637eea518c116100565780637eea518c146100ea57806383230757146100fd578063ab53f2c614610112578063bf2c5b2414610135578063c79800371461014857005b80631e93b0f11461008d5780632c10a159146100b1578063552d7b8e146100c457806373b4522c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461149b565b61015b565b61008b6100d236600461149b565b610339565b61008b6100e536600461149b565b6105e5565b61008b6100f836600461149b565b6107ac565b34801561010957600080fd5b5060015461009e565b34801561011e57600080fd5b506101276109f5565b6040516100a89291906114e3565b61008b61014336600461149b565b610a92565b61008b61015636600461149b565b610cde565b61016b6001600054146009610ec7565b6101858135158061017e57506001548235145b600a610ec7565b6000808055600280546101979061151d565b80601f01602080910402602001604051908101604052809291908181526020018280546101c39061151d565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b505050505080602001905181019061022891906115d8565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516102599190611670565b60405180910390a161026d34156008610ec7565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b01518a528f8f015189528f880151821687528f86015185523383526002909b55436001558d51998a019a909a5296519b88019b909b52935192860192909252518516908401525195820195909552935116908301529060e0015b60405160208183030381529060405260029080519060200190610333929190611345565b50505050565b6103496009600054146017610ec7565b6103638135158061035c57506001548235145b6018610ec7565b6000808055600280546103759061151d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a19061151d565b80156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b50505050508060200190518101906104069190611695565b905061041e6040518060200160405280600081525090565b61042f8260a0015143106019610ec7565b6040805184358152602080860135908201527f4dadf1945cf19fcec67ccb7e31757a1ad0bc533fae9b7a76582523cb8bf28f4e910160405180910390a160e08201516104809060208501359061173b565b8152610493346020850135146014610ec7565b60808201516104ae906001600160a01b031633146015610ec7565b6020808301516104c391850135146016610ec7565b61053460405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b03908116825260208085015181840152604080860151818501526060808701518416908501526080808701519093169284019290925260a0808601519084015260c080860151908401526101008086015160e085015286820135908401528351610120840152600a6000554360015590516105ba91839101611753565b604051602081830303815290604052600290805190602001906105de929190611345565b5050505050565b6105f56003600054146012610ec7565b61060f8135158061060857506001548235145b6013610ec7565b6000808055600280546106219061151d565b80601f016020809104026020016040519081016040528092919081815260200182805461064d9061151d565b801561069a5780601f1061066f5761010080835404028352916020019161069a565b820191906000526020600020905b81548152906001019060200180831161067d57829003601f168201915b50505050508060200190518101906106b291906117eb565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516106e39190611670565b60405180910390a16106f9600134146010610ec7565b8051610711906001600160a01b031633146011610ec7565b6107196113c9565b815181516001600160a01b039182169052602080840151835190910152604080840151835190910152606080840151835190831691015260a08301518251911660809182015282015160c0830151610771919061173b565b815160a001526020808201805160009052805143920191909152805160016040918201528301519051606001526107a781610ef1565b505050565b6107bc600260005414600e610ec7565b6107d6813515806107cf57506001548235145b600f610ec7565b6000808055600280546107e89061151d565b80601f01602080910402602001604051908101604052809291908181526020018280546108149061151d565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190611890565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516108aa9190611670565b60405180910390a16108be3415600b610ec7565b6108db6108d43383606001518460400151611133565b600c610ec7565b80516108f3906001600160a01b03163314600d610ec7565b61094e6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b0190815260a0808d01518b16818d019081524360c0808f01828152600360005560019290925589519b8c019c909c529851978a0197909752945193880193909352905188169086015251908401525190931691810191909152905160e08201526101000161030f565b600060606000546002808054610a0a9061151d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a369061151d565b8015610a835780601f10610a5857610100808354040283529160200191610a83565b820191906000526020600020905b815481529060010190602001808311610a6657829003601f168201915b50505050509050915091509091565b610aa2600a600054146021610ec7565b610abc81351580610ab557506001548235145b6022610ec7565b600080805560028054610ace9061151d565b80601f0160208091040260200160405190810160405280929190818152602001828054610afa9061151d565b8015610b475780601f10610b1c57610100808354040283529160200191610b47565b820191906000526020600020905b815481529060010190602001808311610b2a57829003601f168201915b5050505050806020019051810190610b5f9190611928565b90507fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610b909190611670565b60405180910390a1610ba981602001513414601f610ec7565b6080810151610bc4906001600160a01b031633146020610ec7565b610bd4816060015133600161114b565b80516101008201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c12573d6000803e3d6000fd5b50610c1b6113c9565b815181516001600160a01b03918216905260208084015183519091015260408084015183519091015260608084015183519083169101526080808401518351921691015260a08083015182519091015260c0820151610c7c9060019061173b565b60208083018051929092529051439082015261010083015190830151610120840151610ca8919061173b565b610cb291906119c4565b60208201516040015260e0820151610ccc906001906119c4565b6020820151606001526107a781610ef1565b610cee600960005414601c610ec7565b610d0881351580610d0157506001548235145b601d610ec7565b600080805560028054610d1a9061151d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d469061151d565b8015610d935780601f10610d6857610100808354040283529160200191610d93565b820191906000526020600020905b815481529060010190602001808311610d7657829003601f168201915b5050505050806020019051810190610dab9190611695565b9050610dbf8160a00151431015601e610ec7565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275982604051610dee9190611670565b60405180910390a1610e023415601a610ec7565b6080810151610e36906001600160a01b03163314610e2c5781516001600160a01b03163314610e2f565b60015b601b610ec7565b610e3e6113c9565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551908516908201526080808701518651951694019390935260a08086015185519091015260c085015182850180519190915280514393019290925260e08501518251909101526101008401519051909101526107a781610ef1565b81610eed5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b805160400151602082015151101561108657610f6d60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190941693850193909352845160a0908101519085015281850180515160c0860152805182015160e0860152519092015161010084015260096000554360015590516110629183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401518216908301526080808401519091169082015260a0808301519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906107a7929190611345565b602081015160600151156110b257805160608082015191516020840151909101516110b292919061114b565b6020810151604001511561111d57805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611103573d6000803e3d6000fd5b506000808055600181905561111a90600290611438565b50565b6000808055600181905561111a90600290611438565b60006111418385308561115f565b90505b9392505050565b611156838383611239565b6107a757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916111c6916119db565b60006040518083038185875af1925050503d8060008114611203576040519150601f19603f3d011682016040523d82523d6000602084013e611208565b606091505b50915091506112198282600161130a565b508080602001905181019061122e91906119f7565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611298916119db565b60006040518083038185875af1925050503d80600081146112d5576040519150601f19603f3d011682016040523d82523d6000602084013e6112da565b606091505b50915091506112eb8282600261130a565b508080602001905181019061130091906119f7565b9695505050505050565b60608315611319575081611144565b8251156113295782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ee4565b8280546113519061151d565b90600052602060002090601f01602090048101928261137357600085556113b9565b82601f1061138c57805160ff19168380011785556113b9565b828001600101855582156113b9579182015b828111156113b957825182559160200191906001019061139e565b506113c592915061146e565b5090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016114336040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b5080546114449061151d565b6000825580601f10611454575050565b601f01602090049060005260206000209081019061111a91905b5b808211156113c5576000815560010161146f565b60006040828403121561149557600080fd5b50919050565b6000604082840312156114ad57600080fd5b6111448383611483565b60005b838110156114d25781810151838201526020016114ba565b838111156103335750506000910152565b82815260406020820152600082518060408401526115088160608501602087016114b7565b601f01601f1916919091016060019392505050565b600181811c9082168061153157607f821691505b6020821081141561149557634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561158457634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561158457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146115d357600080fd5b919050565b600060a082840312156115ea57600080fd5b60405160a0810181811067ffffffffffffffff8211171561161b57634e487b7160e01b600052604160045260246000fd5b604052611627836115bc565b81526020830151602082015260408301516040820152611649606084016115bc565b6060820152608083015160808201528091505092915050565b801515811461111a57600080fd5b8135815260408101602083013561168681611662565b80151560208401525092915050565b600061012082840312156116a857600080fd5b6116b0611552565b6116b9836115bc565b815260208301516020820152604083015160408201526116db606084016115bc565b60608201526116ec608084016115bc565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561174e5761174e611725565b500190565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161179360608401826001600160a01b03169052565b5060808301516117ae60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600060e082840312156117fd57600080fd5b60405160e0810181811067ffffffffffffffff8211171561182e57634e487b7160e01b600052604160045260246000fd5b60405261183a836115bc565b8152602083015160208201526040830151604082015261185c606084016115bc565b60608201526080830151608082015261187760a084016115bc565b60a082015260c083015160c08201528091505092915050565b600060c082840312156118a257600080fd5b60405160c0810181811067ffffffffffffffff821117156118d357634e487b7160e01b600052604160045260246000fd5b6040526118df836115bc565b81526020830151602082015260408301516040820152611901606084016115bc565b60608201526080830151608082015261191c60a084016115bc565b60a08201529392505050565b6000610140828403121561193b57600080fd5b61194361158a565b61194c836115bc565b8152602083015160208201526040830151604082015261196e606084016115bc565b606082015261197f608084016115bc565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000828210156119d6576119d6611725565b500390565b600082516119ed8184602087016114b7565b9190910192915050565b600060208284031215611a0957600080fd5b81516111448161166256fea264697066735822122058e580d895c5226f0552ba467d43d8ebfeab09b74bb327247e396154a680a34b64736f6c63430008090033`,
  BytecodeLen: 7648,
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
  "Seller": Seller
  };
export const _APIs = {
  };
