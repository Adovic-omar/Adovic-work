/*top navigation of the page
*/

/*
import ‹name› from "‹relative path›"
ensure before import its in the sre directory
*/
import logo from "./assets/logo.png";
/* component naming rules.*/ /*null or valid jsx*/
function Navigation() {
return ( < div>
<h2>Navigation section</h2>
</ div>
) ;
/*
* /
export so that any othe file can import the component.
1. Default Export: <one major›
export default Navigation;