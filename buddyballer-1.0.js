// BuddyBaller jQuery Plugin v1.0 by Luke Pacholski
// June 1,2013

// Plugin boilerplate adapted from from...

// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 2.0, July 8th, 2011
// by Stefan Gabos

// ...thanks Sefan!

;(function($) {

    $.buddyBaller = function(el, options) {

        var defaults = {
            gender: 'boy',
            tone:   'good'
        }

        // to avoid confusions, use "plugin" to reference the
        // current instance of the  object
        var plugin = this;

        // The plugin's properties will be accessible like:
        // plugin.settings.propertyName from inside the plugin or
        // myplugin.settings.propertyName from outside the plugin
        // where "myplugin" is an instance of the plugin
        plugin.settings = {}

        // Called when object is created
        var init = function() {

            //Final plugin settings
            plugin.settings = $.extend({}, defaults, options);

            // Make 'el' available everywhere
            plugin.el = el;
            
            getName();

        }

        //Private method
        var getName = function() {
          
          var allNames = {
            boy : {
              good : ["wizard",
                      "muffin",
                      "champ",
                      "sport",
                      "tiger",
                      "boss",
                      "chief",
                      "bud",
                      "buddy",
                      "stud",
                      "cool",
                      "ace",
                      "pal",
                      "bro",
                      "slick",
                      "captain",
                      "player",
                      "baller",
                      "junior",
                      "commander"],

              bad :  [
                      "ass",
                      "chode",
                      "chump",
                      "clown",
                      "dipshit",
                      "douche",
                      "dirtbag",
                      "dolt",
                      "dork",
                      "dummy",
                      "dunce",
                      "fool",
                      "idiot",
                      "nimrod",
                      "poser",
                      "slacker",
                      "jerk",
                      "moron",
                      "oaf",
                      "prick",
                      "sloth",
                      "scumbag",
                      "taint",
                      "tool",
                      "twit",
                      "wanker"
                      ]
            }
          }

          var gender =  plugin.settings.gender;
          var tone = plugin.settings.tone;
          var names = allNames[gender][tone];

          var rand1 = Math.floor(Math.random() * names.length);
          var rand2 = Math.floor(Math.random() * names.length);

          //Make sure the names don't repeat
          while(rand1 == rand2) {
            rand2 = Math.floor(Math.random() * names.length);
          }
          
          el.text(names[rand1] + " " + names[rand2]);
          
        }

        // A Public Method Template
        //buddyBaller.getName from outside of this thing
        plugin.newname = function() {
           getName();
        }

        // call the "constructor" method
        init();

    }

})(jQuery);