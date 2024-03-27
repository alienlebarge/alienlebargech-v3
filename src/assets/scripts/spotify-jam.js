class SpotifyJamElement extends HTMLElement {
  constructor() {
    super();

    this.spotifyMusicLink = this.querySelector(`a[href*="open.spotify.com"]`);
    this.jam = this.spotifyMusicLink.parentNode;
  }

  embedCode(href) {
    const embed = document.createElement("iframe");
    embed.src = href.replace("intl-fr/", "embed/");
    //embed.height = embed.src.includes("music-video") ? 450 : 175;
    embed.height = "352";
    embed.width = "100%";
    embed.style = "border-radius:12px";
    embed.loading = "lazy";
    embed.frameBorder = "0";
    embed.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

    return embed;
  }

  connectedCallback() {
    if (this.spotifyMusicLink) {
      this.jam.after(this.embedCode(this.spotifyMusicLink.href));
      this.jam.remove();
    }
  }
}

customElements.define("spotify-jam", SpotifyJamElement);
