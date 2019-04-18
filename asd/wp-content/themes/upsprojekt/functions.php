<?php
include_once( get_stylesheet_directory() . '/includes/enqueue-scripts.php' );
include_once( get_stylesheet_directory() . '/includes/enqueue-styles.php' );
add_action( 'wp_enqueue_scripts', 'vue_enqueue_spa_scripts' );
add_action( 'wp_enqueue_scripts', 'gulp_enqueue_scripts');
add_action( 'wp_enqueue_style', 'temp-styles');