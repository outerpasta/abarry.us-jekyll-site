---
layout: post
title: Emacs Is the Best Text Editor
date: 2025-01-02 15:29 -0800
---
I love Emacs. [My first ever post on Reddit][my-reddit-post]{:target="_blank"} is of a meme-inspired image I made just now. I'm posting it here as well and using it as an excuse to share something about Emacs that I think is cool:

[Ghostty][ghostty-site]{:target="_blank"} is a new terminal emulator [that is being talked about][reddit-ghostty]{:target="_blank"} and I haven't tried it yet, but the terminal multiplexing feature with panes that function like that of Tmux is what I find really intriguing. This is the feature that I find compelling about [WezTerm][wezterm]{:target="_blank"} as well and I would really like to have it, since using Tmux is great but introduces annoying complexity around key bindings and text scrolling that interrupt the natural flow I get from using a native feeling UI, such as what I get from using Gnome-terminal for example.

But I don't really have a desire to install multiple terminal emulators. Even if I was back on MacOS I'd prefer to use the built-in stock terminal application generally. I would most likely begrudgingly succumb to installing iTerm2 _eventually_, with resistance.

However I've found that using the `vterm` package in Emacs is my new way to use a terminal. I have it bound to `C-c v` and I can open any number of n terminals with `C-u` like `C-u 2 C-c v` or `C-u 2 M-x vterm`. Then when needed I can use `M-x vterm-copy-mode` to move around the terminal like a text file. It's trivial to have the buffer inserted into any another buffer: `C-x x i`. The only feature I miss is being able to click on URLs to open them in a web browser, as well as being able to run a nested instance of Emacs (without being unable to exit out of it)!

So not only is Emacs the best text editor, but Emacs might be the best terminal emulator too. I highly recommend it for Emacs aficionados that frequently use a terminal. The `vterm` package provides a slightly more robust terminal than what the buitin `term` command provides.

This is my config for `vterm`, note that 100000 is the max value unless you fiddle with a header file before compiling.

{% highlight lisp %}
(setq vterm-max-scrollback 100000)
(global-set-key (kbd "C-c v") 'vterm)
{% endhighlight %}

![Emacs config meme]({{ "/assets/images/emacs-config-meme.png" | absolute_url }})

[my-reddit-post]: https://www.reddit.com/r/emacs/comments/1hs7ty7/i_made_my_first_meme/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
[ghostty-site]: https://ghostty.org/
[reddit-ghostty]: https://www.reddit.com/r/linuxsucks/comments/1hr8dde/former_ceo_cto_of_hashicorp_and_developer_of/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
[wezterm]: https://wezfurlong.org/wezterm/index.html