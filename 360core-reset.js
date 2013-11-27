// Since 360Link loads Prototype, need to use the jQuery prefix instead of $ 
// to avoid conflicts with Prototype.

jQuery(document).ready(function() {

// Remove existing stylesheets from <head>
jQuery("head link").remove(); 

// Load the new custom stylesheet
jQuery("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/styles/main.css\" />"); // Load the new custom stylesheet
jQuery("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/styles/popover.css\" />");

jQuery("table[name=EJPTable] td:first").remove();

jQuery(".sersol-journal-finder br").remove();

jQuery('#header').append('<a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Header\']);"><img class="logo" src="http://library.owu.edu/images/owulogo.png" alt="OWU Logo" /></a><a href="http://library.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Library Home Header\']);"><img class="brand" src="http://library.owu.edu/images/libraries.png" alt="OWU Libraries" /></a><div id="headerlinks"><div class="quicklinks"><ul><li><a href="http://bb.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Blackboard\']);">Blackboard</a></li><li>&#124;</li><li><a href="http://library.owu.edu/reserves.html" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Reserves\']);">Reserves</a></li><li>&#124;</li><li><a href="https://consort.library.denison.edu/patroninfo" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'My Account\']);">My Library Account</a></li></ul></div> <!-- /end quicklinks --><br /><div class="topNavigation"><ul><li><a class="topNavLink">About</a><ul><li><a href="about.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Libraries\']);">Libraries  &#187;</a><ul><li><a href="http://library.owu.edu/beeghly-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Beeghly\']);">Beeghly Library</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/science-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Science Library\']);">Hobson Science Library</a></li><li><a href="http://library.owu.edu/music-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Music Library\']);">Kinnison Music Library</a></li></ul></li><li><a href="http://library.owu.edu/about.html#collections" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Collections\']);">Collections  &#187;</a><ul><li><a href="http://library.owu.edu/archives-methodism.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Archives\']);">Archives of Ohio United Methodism</a></li><li><a href="http://library.owu.edu/govdocs.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About GovDocs\']);">Government Documents</a></li><li><a href="http://library.owu.edu/rare-books.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Rare Books\']);">Rare Books, Manuscripts, and Artifacts</a></li><li><a href="http://library.owu.edu/owu-history.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About OWU History\']);">OWU Historical Collection</a></li><li><a href="http://drc.owu.edu/" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Digital Collections\']);">Digital Collections</a></li></ul></li><li><a href="http://library.owu.edu/borrow-renew-request.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Borrowing\']);">Borrow, Renew, Request</a></li><li><a href="http://libguides.owu.edu/copyrightandfairuse" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Copyright\']);">Copyright &amp; Fair Use</a></li></ul></li><li><a class="topNavLink">Services</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Research Help\']);">Research Help</a></li><li><a href="http://owu.illiad.oclc.org/illiad/logon.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services ILL\']);">Interlibrary Loan</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/howto-cite.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Citing\']);">How to Cite</a></li><li><a href="http://library.owu.edu/print-copy-scan.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Printing\']);">Print, Copy, Scan</a></li><li><a href="https://www.refworks.com/refworks2/?r=authentication::init&amp;groupcode=RWOHWesleyanU" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services RefWorks\']);">RefWorks</a></li><li><a href="http://library.owu.edu/faculty-support.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Faculty Support\']);">Faculty Support</a></li><li><a href="http://library.owu.edu/services.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services More\']);">More &#187;</a></li></ul></li><li><a class="topNavLink">Contact</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Help\']);">Get Help</a></li><li><a href="http://library.owu.edu/staff-directory.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Staff\']);">Library Staff</a></li></ul></li></ul></div> <!-- /end topNavigation--></div><!-- /end #headerlinks -->');


jQuery('<div class="subject-browse"><a href="#ss-subject-browse-modal" data-toggle="modal">Browse by Subject</a></div><div id="ss-subject-browse-modal" class="modal hide fade" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button><h1 class="pageTitle">Select a Subject</h1></div><div class="modal-body"><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=01">Art, Architecture &amp; Applied Arts</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=BU">Business &amp; Economics</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=11">Earth &amp; Environmental Sciences</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=TE">Engineering &amp; Applied Sciences</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=GI">General</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=HE">Health &amp; Biological Sciences</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=06">History &amp; Archaeology</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=07">Journalism &amp; Communications</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=08">Languages &amp; Literatures</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=GO">Law, Politics &amp; Government</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=10">Music, Dance, Drama &amp; Film</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=RE">Philosophy &amp; Religion</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=LS">Physical Sciences &amp; Mathematics</a><br /><a href="http://eg7az5df6p.search.serialssolutions.com/?V=1.0&amp;L=EG7AZ5DF6P&amp;S=SC&amp;C=SO">Social Sciences</a><br /></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button></div></div>').insertAfter('.SS_TitleSearchForm');

jQuery("#form_titleSearch input:last").prop("class", "searchButton");

jQuery("#form_titleSearch input:last").attr("value", " ");

// jQuery('.sersol-journal-finder > ul').prop('class', 'bullet-list');
// jQuery('.sersol-journal-finder > ul > li > ul').prop('class', 'bullet-list');

jQuery('.sersol-journal-finder > ul').children().css({'font-weight': 'bold', 'margin-bottom': "1em"});
jQuery('strong:first').prop("class", "bold").css({'clear': 'both', 'display': 'block'});
jQuery('<br /><br />').insertAfter('.sersol-journal-finder strong:first');
jQuery('<br /><br />').insertBefore('.sersol-journal-finder strong:first');

jQuery(".SS_Holding br").remove();

jQuery(".SS_Holding table:last-child tr:first-child").remove();

jQuery("span.SS_JournalISSN").filter(function() {
		var journalIssn = jQuery(this).text();
		journalIssn = journalIssn.replace("(", "");
		journalIssn = journalIssn.replace(")", "");
		jQuery(this).append("<span class=\"journal-search-within\"> <a data-toggle=\"popover\" data-placement=\"right\" data-content=\"<h3>Search within this journal</h3><form action='http://owu.summon.serialssolutions.com/search?' method='get'><input type='text' name='s.q'> <input type='hidden' name='t.issn' value='" + journalIssn + "'> <input type='hidden' name='keep_r' value='true'> <input type='submit' class='searchButton-small' value=' '> </form>\"><img src=\"http://library.owu.edu/images/searchButton-30px.png\" alt=\"Search\" /> </a> </span>");
		});

jQuery(".footerContentWrapper").append('<div id="footerLinks"><ul><li><a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Footer\']);">OWU Home</a></li><li><a href="http://library.owu.edu/policies-guidelines.html">Policies &amp; Guidelines</a></li><li><a href="http://library.owu.edu/donations.html">Donations</a></li><li><a href="http://library.owu.edu/employment.html">Employment</a></li></ul><br /></div><!-- /end #footerLinks --><div id="socialMedia"><ul><li><a href="https://twitter.com/owulibraries" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Twitter\']);"><img src="http://library.owu.edu/images/twitter.png" alt="Twitter" />Twitter</a></li><li><a href="https://www.facebook.com/beeghlylibraryowu" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Facebook\']);"><img src="http://library.owu.edu/images/facebook.png" alt="Facebook" />Facebook</a></li><li><a href="http://www.flickr.com/photos/owulibraries/" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Flickr\']);"><img src="http://library.owu.edu/images/flickr.png" alt="Flickr" /> Flickr</a></li>\</ul></div><!-- /end socialMedia --><p>Ohio Wesleyan<p>Copyright &#169; 2013 Ohio Wesleyan University</p>');

jQuery('#footer').after('<script type="text/javascript">$(".journal-search-within a").popover({html: true});</script>')

jQuery(".SS_CopyRightStatement").remove();

});
