import React from 'react';
import File from './File';

const Svg = ({ color = '#FF742F', ...props }) => (
  <File {...props}>
    <path
      fill={color}
      fillRule="evenodd"
      d="M10.0811 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.08101-.2176-.14581-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.10801-.1902.13501-.304.027-.1143.0402-.2304.0402-.3494zm-2.14922-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.16382.0752.29942.179.40742.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.15122.0793-.32942.1184-.53462.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM13.5157 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1605-.243-.2153-.0972-.0542-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4078-.1974.6983 0 .1365.0174.2631.0516.3803.0336.1178.0852.2182.1536.3022.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2182.063-.0887.108-.1902.135-.3039.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3598h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3383.1548-.0683.3222-.1027.5022-.1027.2196 0 .4116.0374.5754.1126.1638.0753.2994.1791.4074.3103.108.1307.189.2841.243.4591.054.175.081.3623.081.5618 0 .182-.0246.3587-.0726.5302-.0486.1715-.1224.3226-.2214.4539-.099.1318-.2244.2362-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0409-.2592-.0759-.0828-.035-.159-.0793-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM14.5036 22.0288h.4644v-.8137h.6156v.8137h.5562v.4463h-.5562v1.449c0 .063.003.1172.0084.1627.0054.0455.018.084.0378.1161.0198.0309.0492.0543.0888.0706.0396.0157.0936.0233.162.0233.0432 0 .0864-.0006.1296-.0023.0432-.0018.0864-.0082.1296-.0181v.462c-.0684.0064-.135.0134-.1998.0204-.0648.007-.1314.0105-.1998.0105-.162 0-.2922-.0146-.3912-.0449-.099-.0297-.1764-.0735-.2328-.1312-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1873-.0354-.2993v-1.6012h-.4644v-.4463zM11.5263 10.8094c-1.0752 0-2.08619.4072-2.84699 1.1468-.7608.7391-1.179 1.7226-1.179 2.768 0 1.0453.4188 2.0282 1.179 2.7673.7602.7402 1.77179 1.1468 2.84699 1.1468s2.0862-.4071 2.847-1.1468c.7608-.7391 1.179-1.722 1.179-2.7673 0-.1278-.1056-.2305-.2364-.2305h-3.5526v-3.4539c0-.1271-.1062-.2304-.237-.2304zm-.363.602v3.0823c0 .322.2682.5834.6.5834h3.1704c-.0816.7566-.4236 1.4571-.9846 2.002-.648.6294-1.5084.9759-2.4228.9759-.9156 0-1.7754-.3465-2.4228-.9759-.6468-.6294-1.0032-1.4659-1.0032-2.3549 0-.8902.3558-1.7267 1.0032-2.355.561-.546 1.2822-.8785 2.0598-.9578z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M12.5931 9.8882c-.1266 0-.2298.10033-.2298.224v3.5747c0 .1236.1032.224.2298.224h3.6768c.1272 0 .2304-.1004.2304-.224 0-1.0145-.4068-1.9682-1.1448-2.6857-.7374-.7175-1.719-1.113-2.7624-1.113zm.3702.6032c.7434.0805 1.4316.4007 1.968.9222.5364.5221.8658 1.1912.9486 1.9139h-2.9166v-2.8361z"
      clipRule="evenodd"
    />
  </File>
);

export default Svg;