journal-finder
==============

Customizations to OWU Libraries' 360 Core Journal Finder

These are customizations to Ohio Wesleyan University's Journal Finder. The implementation of these changes is based on the same principlines behind the link-resolver customizations. See the link-resolver repo at:
https://github.com/bldaigle/link-resolver

If you are interested in re-using this code for your own customzations, just be sure to update the paths to your specific files.

This repository consists of one basic file:
360Core-reset.js

This file calls our main CSS file which contains the styles for our main website as well as the journal finder.

**** INSTALLATION ****

Upload 360Core-reset.js to web server and note the path

In the Serials Solutions Client Center, navigate to 360 Core > Admin Console > Branding Options

Click Edit.

Add the following to the Header HTML box:

	<!-- Begin custom header code -->
	<div id="header">
	</div>
	<div id="main">
		<div class="mainContentWrapper">
			<div class="sersol-journal-finder">
				<p class="breadcrumb"><a href="http://library.owu.edu">Home</a> &nbsp;&nbsp;&#187;&nbsp;&nbsp; Find Journals</p><h1 class="pageTitle floatLeft">Find Journals</h1>
	<!-- End custom header code -->

Add the following to the Footer HTML box:

	<!-- Begin custom footer code -->
	</div>
	</div>
	</div>
	<div id="footer">
		<div class="footerContentWrapper">
		</div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js" type="text/javascript"></script>
	<script src="http://library.owu.edu/journal-finder/360core-reset.js" type="text/javascript"></script>
	<script src="http://library.owu.edu/js/bootstrap.js" type="text/javascript"></script>
	<!-- End custom footer code -->
  
**** CUSTOMIZATION ****

Like the link-resolver, these instructions may or may not work seamlessly for other libraries.
In addition to stripping out all the default CSS, the jQuery in the script works by calling specific elements by their css class or id. I found that these classes or ids may differ depending on your stock 360 Core implementation so you will need to view the source code of your 360 Core pages to find the class or id names for each element.

For questions, contact Ben Daigle at bldaigle@owu.edu
