import JsSHA from 'jssha';

const getTDXHeader = () => {
  const AppID = process.env.VUE_APP_TDXI;
  const AppKey = process.env.VUE_APP_TDXK;
  const GMTString = new Date().toGMTString();
  const ShaObj = new JsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString };
};

export default getTDXHeader;
