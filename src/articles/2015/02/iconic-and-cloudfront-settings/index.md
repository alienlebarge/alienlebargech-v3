---

title:       "How to use Iconic with Amazon S3 and CloudFront"
description: "How I set up S3 and CloudFront to make it works with Iconic incons system."
date:        2015-02-24 19:27:09
tags:
- iconic
- aws
---

[Iconic](https://web.archive.org/web/20221218014722/http://useiconic.com/) is an incredible icons system. But this not as simple as downloading it, uploading it on a [S3 bucket](https://aws.amazon.com/s3/), setting up a [CloudFront](https://aws.amazon.com/cloudfront/) and here "*here you go!*".
Here's how I setup all that stuff to make it works with as a <abbr title="Content Delivery Network">CDN</abbr> for this blog.

I will not dive into technical infos. You will find all you needs in the links at the end of this article. I recommand [Gerard Vivancos' article](https://web.archive.org/web/20150303180052/http://blog.celingest.com:80/en/2014/10/02/tutorial-using-cors-with-cloudfront-and-s3/). It explain very well all you need to know.

## Settings

### S3 Bucket

![Editing the CORS configuration in bucket's permissions panel](https://dlgjp9x71cipk.cloudfront.net/2015-02-24-s3-config.png)

#### Original CORS configuration


    <CORSConfiguration>
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>Authorization</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>

#### New configuration

    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="https://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>Authorization</AllowedHeader>
        </CORSRule>
        <CORSRule>
            <AllowedOrigin>*.alienlebarge.ch</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <AllowedMethod>PUT</AllowedMethod>
            <AllowedMethod>POST</AllowedMethod>
            <AllowedMethod>DELETE</AllowedMethod>
            <AllowedMethod>HEAD</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>*</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>

### Setting CloudFront

![CondFront control panel](https://dlgjp9x71cipk.cloudfront.net/2015-02-24-cloudfront-settings.png)

## Thanks

Thanks to the Iconic team for the wonderfull work and [support](https://web.archive.org/web/20210813014959/https://useiconic.com/community/) !

## Further reading

- [Tutorial: Using CORS with CloudFront and S3](https://web.archive.org/web/20150303180052/http://blog.celingest.com:80/en/2014/10/02/tutorial-using-cors-with-cloudfront-and-s3/)
- [Forum post: Does iconic work with Amazon CloudFront ?](https://web.archive.org/web/20210813014959/https://useiconic.com/community/)
- [Sample CORS configurations](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html#how-do-i-enable-cors)
