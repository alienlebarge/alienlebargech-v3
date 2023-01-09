---
date: 2023-01-09T13:13:19.315+01:00
updated: 2023-01-09T13:14:19.932+01:00
title: Is the fediverse about to get Fryed? (Or, “Why every toot is also a potential denial of service attack”)
bookmark-of: https://ar.al/2022/11/09/is-the-fediverse-about-to-get-fryed-or-why-every-toot-is-also-a-potential-denial-of-service-attack/
visibility: public
syndication:
  - https://social.lol/@alienlebarge/109659190685842614
  - https://twitter.com/alienlebarge/status/1612422515179003909
---
Very interesting details by @aral@mastodon.ar.al how your Mastodon account can be problematic if you are too popular (and sociable).

> You just get a lot of engagement and that requires a ton of Sidekiq power to process.
> 
> For example, let’s look at your birthday post … besides requiring thousands of Sidekiq jobs to spread your post through all their servers (you have 23K followers, let’s assume 3K different servers8), as soon as you create the post 3K Sidekiq jobs are created. At your current plan you have 12 Sidekiq threads, so to process 3K jobs it will take a while because it can only deal with 12 at a time.
> 
> Then, for each reply you receive to that post, 3K jobs are created, so your followers can see that reply without leaving their server or looking at your profile. Then you reply to the reply you got, another 3K jobs are created and so on.
> 
> If you replied to the 100 replies you got on that post in 10 minutes (and assuming my 3K servers math is right). You created 300K jobs in Sidekiq. That’s why you get those queues.
