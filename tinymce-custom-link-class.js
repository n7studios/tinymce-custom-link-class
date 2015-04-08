(function() {
	tinymce.PluginManager.add( 'custom_link_class', function( editor, url ) {
		// Add Button to Visual Editor Toolbar
		editor.addButton('custom_link_class', {
			title: 'Insert Button Link',
			image: url + '/icon.png',
			cmd: 'custom_link_class'
		});	

		// Add Command when Button Clicked
		editor.addCommand('custom_link_class', function() {
			// Check we have selected some text that we want to link
			var text = editor.selection.getContent({
				'format': 'html'
			});
			if ( text.length === 0 ) {
				alert( 'Please select some text to link.' );
				return;
			}

			// Ask the user to enter a URL
			var result = prompt('Enter the link');
			if ( !result ) {
				// User cancelled - exit
				return;
			}
			if (result.length === 0) {
				// User didn't enter a URL - exit
				return;
			}

			// Insert selected text back into editor, wrapping it in an anchor tag
			editor.execCommand('mceReplaceContent', false, '<a href="' + result + '" class="button">' + text + '</a>');
		});
	});
})();		