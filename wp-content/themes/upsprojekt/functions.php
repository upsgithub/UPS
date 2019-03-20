<?php
include_once( get_stylesheet_directory() . '/includes/enqueue-scripts.php' );
add_action( 'wp_enqueue_scripts', 'vue_enqueue_spa_scripts' );
