import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import createNode from "./nodeGenerator";

library.add(faFacebook, faTwitter, faInstagram, faGithub);
dom.watch();

export default function addLogo(parent, id, iconType, iconName) {
    return createNode("i", parent, id, [`fa-${iconType.toLowerCase()}`, `fa-${iconName.toLowerCase()}`]);
}

/* <i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-github"></i> */