/**
 * @param {string} KEY 인증키 기본값 : sample key
 * @param {string} pIndex 인증키 기본값 : 1(sample key는 1 고정)
 * @param {string} pSize 인증키 기본값 : 100(sample key는 5 고정)
 */
export interface DefaultArgs {
    KEY?: string;
    pIndex?: number;
    pSize?: number;
}