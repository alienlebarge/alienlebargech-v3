class SpotifyJamElement extends HTMLElement {
  constructor() {
    super();
    // Find the Spotify link within the element
    this.spotifyMusicLink = this.querySelector(`a[href*="open.spotify.com"]`);
    // Get the parent node of the Spotify link
    this.jam = this.spotifyMusicLink.parentNode;
  }

  // Get the Spotify ID based on the href link
  getSpotifyId(href) {
    const spotifyId = this.spotifyMusicLink.href.split("/").pop();
    return spotifyId;
  }

  formatedSpotifyLink(link, id) {
    const linkToFormat = link;
    // Hide the Spotify link visually
    linkToFormat.classList.add("u-visually-hidden");
    // Set id for the Spotify link
    linkToFormat.setAttribute("id", id);
    return linkToFormat;
  }

  // Create an iframe element with specified attributes including aria-describedby
  embedCode(href, describedBy) {
    const embed = document.createElement("iframe");
    embed.src = href.replace("intl-fr/", "embed/");
    embed.setAttribute("aria-describedby", describedBy);
    embed.height = "352";
    embed.width = "100%";
    embed.style.borderRadius = "12px";
    embed.loading = "lazy";
    embed.frameBorder = "0";
    embed.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    return embed;
  }

  connectedCallback() {
    // Check if a Spotify link is found in the element
    if (this.spotifyMusicLink) {
      // Insert the Spotify link
      this.jam.after(this.formatedSpotifyLink(this.spotifyMusicLink, this.getSpotifyId(this.spotifyMusicLink.href)));

      // Insert the iframe with aria-describedby based on the Spotify ID
      this.jam.after(this.embedCode(this.spotifyMusicLink.href, this.getSpotifyId(this.spotifyMusicLink.href)));


      this.jam.remove();
    }
  }
}

customElements.define("spotify-jam", SpotifyJamElement);
