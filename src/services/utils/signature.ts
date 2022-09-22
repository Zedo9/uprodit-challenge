import hmacsha1 from 'hmacsha1'
import { v4 } from 'uuid'

const generateSignature = (uri: string) => {
    // TODO: use environment variables
    var appid = "challenge_uprodit"
    var env = "production"

    var auth_signature_method = 'HMAC-SHA1';
    var auth_consumer_key = encodeURIComponent(hmacsha1(appid, env));
    var auth_token = v4();
    var uri_path = uri.replace(new RegExp('http(s)?://[^/]*'), '')
    var auth_signature = encodeURIComponent(hmacsha1(appid, uri_path + auth_token));
    var auth_nonce = encodeURIComponent(hmacsha1(appid, v4()));
    var auth_callback = encodeURIComponent(uri_path);
    var auth_timestamp = new Date().getTime();
  
    return `Auth ?auth_signature=${auth_signature}&auth_nonce=${auth_nonce}&auth_callback=${auth_callback}&auth_timestamp=${auth_timestamp}&auth_token=${auth_token}&auth_signature_method=${auth_signature_method}&auth_consumer_key=${auth_consumer_key}`;
}

export default generateSignature;
