var DefaultConfiguration = require('./default');


var ElifeConfiguration = function() {

};

ElifeConfiguration.Prototype = function() {

  // Resolves figure url
  // --------
  // 

  this.enhanceFigure = function(state, node, element) {
    var graphic = figure.querySelector("graphic");
    var url = graphic.getAttribute("xlink:href");

    // Example url to SVG: http://cdn.elifesciences.org/elife-articles/00768/svg/elife00768f001.svg
    url = [
      "http://cdn.elifesciences.org/elife-articles/",
      state.doc.id,
      "/svg/",
      url,
      ".svg"
    ].join('');

    node.url = url;
  };

  this.enhanceVideo = function(state, node, element) {
    var el = element.querySelector("media") || element;
    var name = (el.getAttribute("xlink:href")).replace(/\.[^\.]+$/g, '');
    var result = [];

    node.url = "http://static.movie-usa.glencoesoftware.com/mp4/10.7554/"+name+".mp4";
    node.url_ogv = "http://static.movie-usa.glencoesoftware.com/ogv/10.7554/"+name+".ogv";
    //result.url_webm = "http://static.movie-usa.glencoesoftware.com/webm/10.7554/"+name+".webm";
    node.poster = "http://static.movie-usa.glencoesoftware.com/jpg/10.7554/"+name+".jpg";
    return result;
  };
};

ElifeConfiguration.Prototype.prototype = DefaultConfiguration.prototype;
ElifeConfiguration.prototype = new ElifeConfiguration.Prototype();
ElifeConfiguration.prototype.constructor = ElifeConfiguration;

module.exports = ElifeConfiguration;
