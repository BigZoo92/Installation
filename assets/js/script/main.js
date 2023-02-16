/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.tooltipText = "{word}: {value}";
series.fontFamily = "Courier New";
series.maxFontSize = am4core.percent(30);

 

series.text="Un, union, force, animaux, puissance, solidarité, coopération, dessin, bande, dessinée, harmonies, paix, entente, collaboration, avenir, communauté, entraide, appui, complicité, amitié, soutien, fraternité, respect, solidité, coordination, compréhension, concorde, partenariat, dialogue, action, bienveillance, calme, tolérance, unité, amour, cohésion, sérénité, bonté, paix, cohabitation, valeurs, enthousiasme, partage, bien-être, détermination, honnêteté, intégrité, bonne volonté, altruisme, confiance, aide, compréhension, illustration, énergie, imagination, créativité, rêve, inspiration, initiative, initiative, courage, imagination, persévérance, innovation, oser, résolution, découverte, partage.";

series.text2="Un, union, force, animaux, puissance, solidarité, coopération, dessin, bande, dessinée, harmonies, paix, entente, collaboration, avenir, communauté, entraide, appui, complicité, amitié, soutien, fraternité, respect, solidité, coordination, compréhension, concorde, partenariat, dialogue, action, bienveillance, calme, tolérance, unité, amour, cohésion, sérénité, bonté, paix, cohabitation, valeurs, enthousiasme, partage, bien-être, détermination, honnêteté, intégrité, bonne volonté, altruisme, confiance, aide, compréhension, illustration, énergie, imagination, créativité, rêve, inspiration, initiative, initiative, courage, imagination, persévérance, innovation, oser, résolution, découverte, partage.";