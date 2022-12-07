<?php

/**
 * To go to a particular file/page from another, it is best to use absolute URLS.
 *
 * Shared files used on multiple pages will take us to pages we don't want to go to. The pages may be nested multiple levels deeper or above the page we are currently on. 
 *
 * So we can share a template, but to solve our issue. We can define constants.
 *
 *
 *
 *
 * */

// Skoglund CMS method : assign the root URL to a PHP constant

$public_end = strpos($_SERVER['SCRIPT_NAME'], '/public'), + 7;
$doc_root = subtstr($_SERVER['SCRIPT_NAME'], 0, $public_end);
define("WWW_ROOT", $doc_root);



// URL Parameters
//
// somepage.php?page=2
// somepage.php?category=7&page=3
//
// Parameters are place in the $_GET superglobal
//
// $page = $_GET['page'];
//
//


// How to set defualt values for missing URL parameters
//

if(isset($_GET['page'})) {

	$page = $_GET['page'];
} else {
	$page = '1';
}

// OR

$page = isset($_GET['page']) ? $_GET['page'] : '1';

$page = $_GET['page'] ?? '1';


// Encoding URL Parameters 
// Scenario - URL contains a name which includes an & or some other character
// urlencode($string) and rawurlencode($string)
// * letters, numbers, underscore, and dash are unchanged
// *reserved characerts are encoded
// * urlencode: spaces become "+"
// * rawurlencode: spaces become "%20"

?>
