import { BigNumber } from "bignumber.js";

const num = new BigNumber(0.1);
// 加算
const val1 = num.plus(0.2);
// 減算
const val2 = num.minus(0.2);
// 乗算
const val3 = num.multipliedBy(0.2);
//除算
const val4 = num.dividedBy(0.2);

// 計算結果を文字列化して出力
console.log(val1.toString(), val2.toString(), val3.toString(), val4.toString());

// カンマ区切りで出力
const val5 = new BigNumber(1000000);
console.log(val5.toFormat());
