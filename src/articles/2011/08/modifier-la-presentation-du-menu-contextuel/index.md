---
date: 2011-08-09
title: Modifier la présentation du menu contextuel
categories:
- Typo3
tags:
- Backend
- Contextuel
- Menu
- TSconfig
- Typo3
---
Récemment, on m'a demandé de modifier la présentation du menu contextuel dans le backend Typo3. Même si je ne le recommande pas, vous trouverez ci-dessous un petit explicatif comment procéder.

<!--more-->Le client désirait remonter d'un niveau les éléments qui se trouvent dans "actions sur la page".

Pour visualiser le TSconfig qui gère l'affichage du menu contextuel. Il vous suffit de vous rendre dans le module "Administration des utilisateur" et de d'activer l'affichage du TSconfig.

Le TSconfig par défaut, se présente comme ci-dessous :

```shell
options.contextMenu.table.pages {
	disableItems =
	items {
		100 = ITEM
		100 {
			callbackAction = viewPage
			displayCondition = canBeViewed != 0
			label = LLL:EXT:lang/locallang_core.xml:cm.view
			name = view
			spriteIcon = actions-document-view
		}

		200 = DIVIDER

		300 = ITEM
		300 {
			callbackAction = disablePage
			displayCondition = getRecord|hidden = 0 &amp;&amp; canBeDisabledAndEnabled != 0
			label = LLL:EXT:lang/locallang_common.xml:disable
			name = disable
			spriteIcon = actions-edit-hide
		}

		400 = ITEM
		400 {
			callbackAction = enablePage
			displayCondition = getRecord|hidden = 1 &amp;&amp; canBeDisabledAndEnabled != 0
			label = LLL:EXT:lang/locallang_common.xml:enable
			name = enable
			spriteIcon = actions-edit-unhide
		}

		500 = ITEM
		500 {
			callbackAction = editPageProperties
			displayCondition = canBeEdited != 0
			label = LLL:EXT:lang/locallang_core.xml:cm.edit
			name = edit
			spriteIcon = actions-document-open
		}

		600 = ITEM
		600 {
			callbackAction = openInfoPopUp
			displayCondition = canShowInfo != 0
			label = LLL:EXT:lang/locallang_core.xml:cm.info
			name = info
			spriteIcon = actions-document-info
		}

		700 = ITEM
		700 {
			callbackAction = openHistoryPopUp
			displayCondition = canShowHistory != 0
			label = LLL:EXT:lang/locallang_misc.xml:CM_history
			name = history
			spriteIcon = actions-document-history-open
		}

		800 = DIVIDER

		900 = SUBMENU
		900 {
			100 = ITEM
			100 {
				callbackAction = newPageWizard
				displayCondition = canCreateNewPages != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.new
				name = new
				spriteIcon = actions-page-new
			}

			200 = DIVIDER

			300 = ITEM
			300 {
				callbackAction = enableCutMode
				displayCondition = isInCutMode = 0 &amp;&amp; canBeCut != 0 &amp;&amp; isMountPoint != 1
				label = LLL:EXT:lang/locallang_core.xml:cm.cut
				name = cut
				spriteIcon = actions-edit-cut
			}

			400 = ITEM
			400 {
				callbackAction = disableCutMode
				displayCondition = isInCutMode = 1 &amp;&amp; canBeCut != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.cut
				name = cut
				spriteIcon = actions-edit-cut-release
			}

			500 = ITEM
			500 {
				callbackAction = enableCopyMode
				displayCondition = isInCopyMode = 0 &amp;&amp; canBeCopied != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.copy
				name = copy
				spriteIcon = actions-edit-copy
			}

			600 = ITEM
			600 {
				callbackAction = disableCopyMode
				displayCondition = isInCopyMode = 1 &amp;&amp; canBeCopied != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.copy
				name = copy
				spriteIcon = actions-edit-copy-release
			}

			700 = ITEM
			700 {
				callbackAction = pasteIntoNode
				displayCondition = getContextInfo|inCopyMode = 1 || getContextInfo|inCutMode = 1 &amp;&amp; canBePastedInto != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.pasteinto
				name = pasteInto
				spriteIcon = actions-document-paste-into
			}

			800 = ITEM
			800 {
				callbackAction = pasteAfterNode
				displayCondition = getContextInfo|inCopyMode = 1 || getContextInfo|inCutMode = 1 &amp;&amp; canBePastedAfter != 0
				label = LLL:EXT:lang/locallang_core.xml:cm.pasteafter
				name = pasteAfter
				spriteIcon = actions-document-paste-after
			}

			900 = DIVIDER

			1000 = ITEM
			1000 {
				callbackAction = removeNode
				displayCondition = canBeRemoved != 0 &amp;&amp; isMountPoint != 1
				label = LLL:EXT:lang/locallang_core.xml:cm.delete
				name = delete
				spriteIcon = actions-edit-delete
			}

			label = LLL:EXT:lang/locallang_core.xml:cm.copyPasteActions
		}
	}
}
```

L'élément 900 est le sous-menu que nous voulons modifier.

Il suffit donc d'ajouter ce TSconfig aux utilisateurs ou groupes d'utilisateur.

```shell
## Modif de présentation du menu contextuel

# Les élément se trouvant dans &quot;action sur la page&quot; sont remontés d'un niveau

options.contextMenu.table.pages.items {

	# del default submenu
	900 &gt;

	# newPageWizard
	900 = ITEM
	900 {
		callbackAction = newPageWizard
		displayCondition = canCreateNewPages != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.new
		name = new
		spriteIcon = actions-page-new
	}

	910 = DIVIDER

	# enableCutMode
	920 = ITEM
	920 {
		callbackAction = enableCutMode
		displayCondition = isInCutMode = 0 &amp;&amp; canBeCut != 0 &amp;&amp; isMountPoint != 1
		label = LLL:EXT:lang/locallang_core.xml:cm.cut
		name = cut
		spriteIcon = actions-edit-cut
	}

	# disableCutMode
	930 = ITEM
	930 {
		callbackAction = disableCutMode
		displayCondition = isInCutMode = 1 &amp;&amp; canBeCut != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.cut
		name = cut
		spriteIcon = actions-edit-cut-release
	}

	# enableCopyMode
	940 = ITEM
	940 {
		callbackAction = enableCopyMode
		displayCondition = isInCopyMode = 0 &amp;&amp; canBeCopied != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.copy
		name = copy
		spriteIcon = actions-edit-copy
	}

	# disableCopyMode
	950 = ITEM
	950 {
		callbackAction = disableCopyMode
		displayCondition = isInCopyMode = 1 &amp;&amp; canBeCopied != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.copy
		name = copy
		spriteIcon = actions-edit-copy-release
	}

	# pasteIntoNode
	960 = ITEM
	960 {
		callbackAction = pasteIntoNode
		displayCondition = getContextInfo|inCopyMode = 1 || getContextInfo|inCutMode = 1 &amp;&amp; canBePastedInto != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.pasteinto
		name = pasteInto
		spriteIcon = actions-document-paste-into
	}

	# pasteAfterNode
	970 = ITEM
	970 {
		callbackAction = pasteAfterNode
		displayCondition = getContextInfo|inCopyMode = 1 || getContextInfo|inCutMode = 1 &amp;&amp; canBePastedAfter != 0
		label = LLL:EXT:lang/locallang_core.xml:cm.pasteafter
		name = pasteAfter
		spriteIcon = actions-document-paste-after
	}

	# divider
	980 = DIVIDER

	# removeNode
	990 = ITEM
	990 {
		callbackAction = removeNode
		displayCondition = canBeRemoved != 0 &amp;&amp; isMountPoint != 1
		label = LLL:EXT:lang/locallang_core.xml:cm.delete
		name = delete
		spriteIcon = actions-edit-delete
	}
}
```

Dans cet exemple, j'ai vidé le SUBMENU. Puis, j'ai réécrit un par un tous les éléments du menu mais un niveau plus haut.

Une solution plus courte pourait être de reprendre les configurations déjà existantes puis vider le SUBMENU. Cela donnerait quelque chose dans ce genre :

```shell
## Modif de présentation du menu contextuel

# Les élément se trouvant dans &quot;action sur la page&quot; sont remontés d'un niveau

options.contextMenu.table.pages.items {

	801 &lt; .900.100
	802 = DIVIDER
	803 &lt; .900.300
	804 &lt; .900.400
	805 &lt; .900.500
	806 &lt; .900.600
	807 &lt; .900.700
	809 &lt; .900.800
	810 = DIVIDER
	811 &lt; .900.1000

	# del default submenu
	900 &gt;
}
```

Cette solution nécessite beaucoup mois de code. A vous de voir laquelle vous désirez utiliser.
Ces configurations ont été faites sur la version 4.5.3 de Typo3
