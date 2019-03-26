<?php
function temp_styles(){
	wp_register_style(
		'temp-styles',
		get_template_directory_uri() . '/temp/css/styles.css',
		array(),
		true 
	);
}