'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
	paths = {
		views: {
			src: ['./src/views/index.html', './src/views/pages/*.html'],
			dist: './dist/',
			watch: ['./src/blocks/**/*.html', './src/views/**/*.html']
		},
		styles: {
			src: ['./src/styles/main.{scss,sass}', './src/styles/print.{scss,sass}'],
			dist: './dist/styles/',
			watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}']
		},
		scripts: {
			src: './src/js/index.js',
			dist: './dist/js/',
			watch: [
				'./src/blocks/**/*.js',
				'./src/js/**/*.js',
				'./src/blocks/**/*.vue'
			]
		},
		images: {
			src: [
				'./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
				'!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
			],
			dist: './dist/img/',
			watch: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}'
		},
		webp: {
			src: [
				'./src/img/**/*.{jpg,jpeg,png,tiff}',
				'!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
			],
			dist: './dist/img/',
			watch: [
				'./src/img/**/*.{jpg,jpeg,png,tiff}',
				'!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
			]
		},
		sprites: {
			src: './src/img/svg/*.svg',
			dist: './dist/img/sprites/',
			watch: './src/img/svg/*.svg'
		},
		fonts: {
			src: './src/fonts/**/*.{woff,woff2,otf}',
			dist: './dist/fonts/',
			watch: './src/fonts/**/*.{woff,woff2,otf}'
		},
		favicons: {
			src: './src/img/favicon/*.{jpg,jpeg,png,gif}',
			dist: './dist/img/favicons/'
		},
		gzip: {
			src: './src/.htaccess',
			dist: './dist/'
		},
		videos: {
			src: './src/videos/*.mp4',
			dist: './dist/videos/',
			watch: './src/videos/*.mp4'
		}
	};

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series(
	'clean',
	'smart-grid',
	gulp.parallel([
		'views',
		'styles',
		'scripts',
		'images',
		'webp',
		'sprites',
		'fonts',
		'favicons',
		'videos'
	]),
	gulp.parallel('serve')
);

export const prod = gulp.series(
	'clean',
	gulp.series([
		'views',
		'styles',
		'scripts',
		'images',
		'webp',
		'sprites',
		'fonts',
		'favicons',
		'gzip',
		'videos'
	])
);

export default development;
