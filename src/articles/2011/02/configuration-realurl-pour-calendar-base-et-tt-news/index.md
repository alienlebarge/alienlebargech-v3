---
date: 2011-02-04

title: Configuration Realurl pour Calendar Base (et tt_news)
categories:
- Programmation
- Typo3
tags:
- cal
- Calendar Base
- CMS
- Configuration
- News
- PHP
- realurl
- tt_news
- Typo3
- URL
---
<img class="alignnone size-medium wp-image-2784" title="Do you speak machine ?" src="https://dlgjp9x71cipk.cloudfront.net/2011/02/doyouspeakmachine-500x373.jpg" alt="" width="500" height="373" />

J'ai eu un peu de peine à trouver sur le net une configuration de <a title="Page de l'extenoin Realurl" href="https://typo3.org/extensions/repository/view/realurl/current/">Realurl</a> pour l'extension <a title="Page de l'extension Calendar Base" href="https://typo3.org/extensions/repository/view/cal/current/">Calendar Base</a> (ou cal). Je l'ai donc refaite.

<!--more-->

La voici pour vous (et pour le même prix, vous avez droit à <a title="Page de l'extension tt_news" href="https://typo3.org/extensions/repository/view/tt_news/current/">tt_news</a>) :

[php]
&lt;?php
	/**
	 * RealURL configuration
	 * 
	 * @author		Cédric Aellen
	 * @version		1.0
	 */
	$TYPO3_CONF_VARS['EXTCONF']['realurl'] = array(
	
		// Default host
		'_DEFAULT' =&gt; array(
			
			// General configuration
			'init' =&gt; array(
				'doNotRawUrlEncodeParameterNames' =&gt; 0,
				'enableCHashCache'                =&gt; 1,
				'respectSimulateStaticURLs'       =&gt; 1,
				'adminJumpToBackend'              =&gt; 0,
				'enableUrlDecodeCache'            =&gt; 1,
				'enableUrlEncodeCache'            =&gt; 0,
				'appendMissingSlash'              =&gt; 'ifNotFile'
			),
			
			// Redirections
			'redirects' =&gt; array(),
			
			// Pre variables
			'preVars' =&gt; array(

				// Language
				array(
					'GETvar'       =&gt; 'L',
					'valueDefault' =&gt; 'fr',
					'valueMap'     =&gt; array(
						'fr' =&gt; '0',
						'de' =&gt; '2',
						'en' =&gt; '3'
					)
				),
				
				// No cache
				array(
					'noMatch'  =&gt; 'bypass',
					'GETvar'   =&gt; 'no_cache',
					'valueMap' =&gt; array(
						'no_cache' =&gt; 1,
					)
				),
				
			),
			
			// Transformation method
			'pagePath' =&gt; array(
				'type'           =&gt; 'user',
				'userFunc'       =&gt; 'EXT:realurl/class.tx_realurl_advanced.php:&amp;tx_realurl_advanced-&gt;main',
				'spaceCharacter' =&gt; '-',
				'languageGetVar' =&gt; 'L',
				'expireDays'     =&gt; 3,
				'rootpage_id'    =&gt; 1,
			),
			
			// Fixed post variables
			'fixedPostVars' =&gt; array(),
			
			// Post variables
            'postVarSets' =&gt; array
            (
                '_DEFAULT' =&gt; array
                (
                    /***********************************************************
                     * tt_news
                     **********************************************************/
                    'archive' =&gt; array
                    (
                        array
                        (
                            'GETvar' =&gt; 'tx_ttnews[year]'
                        ),
                        array
                        (
                            'GETvar'   =&gt; 'tx_ttnews[month]',
                            'valueMap' =&gt; array
                            (
                                'january'   =&gt; '01',
                                'february'  =&gt; '02',
                                'march'     =&gt; '03',
                                'april'     =&gt; '04',
                                'may'       =&gt; '05',
                                'june'      =&gt; '06',
                                'july'      =&gt; '07',
                                'august'    =&gt; '08',
                                'september' =&gt; '09',
                                'october'   =&gt; '10',
                                'november'  =&gt; '11',
                                'december'  =&gt; '12'
                            )
                        )
                    ),
                    'browse' =&gt; array
                    (
                        array
                        (
                            'GETvar' =&gt; 'tx_ttnews[pointer]'
                        )
                    ),
                    'select_category' =&gt; array
                    (
                        array
                        (
                            'GETvar' =&gt; 'tx_ttnews[cat]'
                        )
                    ),
                    'article' =&gt; array
                    (
                        array
                        (
                            'GETvar' =&gt; 'tx_ttnews[tt_news]',
                            'lookUpTable' =&gt; array
                            (
                                'table'               =&gt; 'tt_news',
                                'id_field'            =&gt; 'uid',
                                'alias_field'         =&gt; 'title',
                                'addWhereClause'      =&gt; ' AND NOT deleted',
                                'useUniqueCache'      =&gt; 1,
                                'useUniqueCache_conf' =&gt; array
                                (
                                    'strtolower'     =&gt; 1,
                                    'spaceCharacter' =&gt; '-'
                                )
                            )
                        ),
                        array(
                            'GETvar' =&gt; 'tx_ttnews[swords]'
                        )
                    ), // tt_news [end]

                    /***********************************************************
                     * cal
                     **********************************************************/
                    'cal' =&gt; array(
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[view]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[type]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[uid]',
                    		'lookUpTable' =&gt; array(
                    			'table' 				=&gt; 'tx_cal_event',
                    			'id_field' 				=&gt; 'uid',
                    			'alias_field'			=&gt; 'title',
                    			'addWhereClause'		=&gt; ' AND deleted !=1',
                    			'useUniqueCache'		=&gt; 1,
                    			'useUniqueCache_conf'	=&gt; array(
                    				'strtolower'			=&gt; 1,
                    				'spaceCharacter'		=&gt; '-',
                    			),
                    		),
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[lastview]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[year]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[month]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[day]'
                    	),
                    	array(
                    		'GETvar' =&gt; 'tx_cal_controller[category]',
                    		'lookUpTable' =&gt; array(
                    			'table' 				=&gt; 'tx_cal_category',
                    			'id_field' 				=&gt; 'uid',
                    			'alias_field'			=&gt; 'title',
                    			'addWhereClause'		=&gt; ' AND deleted !=1',
                    			'useUniqueCache'		=&gt; 1,
                    			'useUniqueCache_conf'	=&gt; array(
                    				'strtolower'			=&gt; 1,
                    				'spaceCharacter'		=&gt; '-',
                    			),
                    		),
                    	),
                    ) // cal [end]
                    
                    // defin here more extension
                )
            ),
            
			// File names
			'fileName' =&gt; array(
				'index' =&gt; array(
					'_DEFAULT' =&gt; array(
						'keyValues' =&gt; array(),
					),
					'index.html' =&gt; array(
						'keyValues' =&gt; array(),
					),
				),
			),
		),
	);
?&gt;
[/php]

Les versions utilisées :
<ul>
	<li>Typo3 4.5</li>
	<li>cal 1.3.3</li>
	<li>tt_news 3.0.1</li>
</ul>
