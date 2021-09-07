<!--
 * @Author: abc
 * @Date: 2021-08-26 14:35:27
 * @LastEditors: abc
 * @LastEditTime: 2021-08-26 17:18:29
 * @Description: news  details
-->
<template>
  <div class="details">
    <div class="lead-img">
      <img
        src="@/assets/image/Data_Blog_Image_v4_grainy-1100x550.jpg"
        alt="Data_Blog_Image_v4_grainy-1100x550.jpg"
      />
    </div>
    <div class="inner">
      <div class="social-networks-holder">
        <div class="sticky-wrap-social-networks">
          <ul class="social-networks">
            <li>
              <a
                href="#"
                class="btn-share--linkedin"
                data-title="How long does it take to implement Mixpanel? A 3-step evaluation"
                data-link="https%3A%2F%2Fmixpanel.com%2Fblog%2Fhow-long-does-it-take-to-implement-mixpanel-a-3-step-evaluation%2F"
                data-share="How long does it take to implement Mixpanel? A 3-step evaluation"
              >
                <i class="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="btn-share--facebook"
                data-link="https%3A%2F%2Fmixpanel.com%2Fblog%2Fhow-long-does-it-take-to-implement-mixpanel-a-3-step-evaluation%2F"
              >
                <i class="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="btn-share--twitter"
                data-link="https%3A%2F%2Fmixpanel.com%2Fblog%2Fhow-long-does-it-take-to-implement-mixpanel-a-3-step-evaluation%2F"
                data-share="How long does it take to implement Mixpanel? A 3-step evaluation"
              >
                <i class="icon-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lead-text">
        <div class="cont-holder">
          <strong class="tag-category">Inside Mixpanel</strong>

          <h1>
            How long does it take to implement Mixpanel? A 3-step evaluation
          </h1>

          <div class="blog-cite">
            <div class="avatar">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="
                    https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AK.jpeg 2x,
                    https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AK.jpeg 1x
                  "
                />
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AK.jpeg"
                  alt=""
                />
              </picture>
            </div>
            <div class="per-info">
              <strong class="name">Aaron Krivitzky (AK)</strong>
              <span class="designation"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="desc">
        <div class="cont-holder content-component">
          <p>
            <em
              >Product teams evaluating Mixpanel often ask us: how long does it
              take to implement? And, what are my options for importing data?
              While there’s a short answer, which I’ve included below, the
              longer (better) answer boils down to three key decisions that
              product teams need to make about their implementation strategy.
            </em>
          </p>

          <p>
            <em
              >In this article, I’ll walk you through a simple evaluation you
              can conduct to help answer this question.</em
            >
          </p>

          <h2>First principles</h2>

          <h4>Why would you want to implement Mixpanel in the first place?</h4>

          <p>
            Mixpanel is a best-in-class telemetry tool for product analytics.
            This means Mixpanel doesn’t add any <em>new</em> functionality to
            your product; it simply makes it possible (and easy) to measure how
            users interact with any application by collecting discrete user
            behaviors as data, and storing that data securely in the cloud. But
            getting the data (i.e. collection and storage) is only half of the
            equation. We also need a set of tools that are purpose-built to
            <em>analyze</em> that data.
          </p>

          <p>After all, data is only meaningful if we can make sense of it!</p>

          <p>
            Mixpanel’s reports and modules make it possible (and easy) to answer
            difficult questions about your end users’ behaviors in your product.
            And ultimately, that analysis will give you hard facts you can use
            to improve your user experience.
          </p>

          <p>
            All this to say, before you can even begin implementation,
            <strong
              >you need to know which metrics, behaviors, and KPIs you’d like to
              measure.</strong
            >
            Figuring out what these are is the basis of any
            <a
              href="https://mixpanel.com/data-reports/guide-product-metrics/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >analytics strategy</a
            >
            (“measuring everything”—often the battle-cry of
            <a
              href="https://mixpanel.com/codeless-mobile-analytics/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >codeless analytics solutions</a
            >—is <em>not</em> an analytics strategy).
          </p>

          <p>
            Most product teams come to us with a strong sense of their business
            goals and KPIs, even if they don’t yet know the metrics they’ll need
            to support those KPIs. Then, through strategy sessions with the
            Mixpanel team, they’ll uncover the important user behaviors they
            need to track for proper analysis.
          </p>

          <p>
            For example, if a business has a KPI of maximizing user engagement
            on videos<strong>,</strong> we might leverage
            <em>behaviors</em> like ‘video start’, ‘video stop’, and ‘video
            complete’ combined with <em>dimensions</em> like ‘watch time’,
            ‘video category’, ‘video quality’, and ‘video id’—all of which
            bubble up to a more general KPI of ‘video engagement.’
          </p>

          <p>
            A ‘video engagement’ KPI <em>might</em> look like this
            <a href="https://mixpanel.com/get-started/?explore=True"
              >in Mixpanel</a
            >:
          </p>

          <div class="wp-block-image">
            <figure class="aligncenter">
              <img
                loading="lazy"
                width="1024"
                height="371"
                class="wp-image-20879"
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-1024x371.png"
                alt=""
                srcset="
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-1024x371.png 1024w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-300x109.png   300w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-768x279.png   768w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-100x36.png    100w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1-1100x399.png 1100w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image2-1.png          1191w
                "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption>
                Before you can begin implementation, you need to know which
                metrics, behaviors, and KPIs you’d like to measure.
              </figcaption>
            </figure>
          </div>

          <p>
            (Note, we’ve defined our KPI of ‘video engagement’ by using smaller
            building blocks, which are based on metrics and dimensions derived
            from actions that&nbsp; the end user has taken.)
          </p>

          <p>
            Now that we’ve covered the basics of adopting a product analytics
            solution along with a tangible strategy, let’s dive into the actual
            question you came to this article for:<strong>
              how long, <em>really</em>, does it take to implement?</strong
            >
          </p>

          <h2><strong>The short, TL;DR answer</strong></h2>

          <p>
            Once we have a strategy in place (i.e., a set of behaviors and
            metrics that we need to measure, along with the KPIs they bubble up
            to), we’re ready to start our implementation. We do this with
            <a
              href="https://mixpanel.com/blog/2019/03/05/codeless-analytics-problems/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >some simple code</a
            >, which is responsible for telling Mixpanel’s ingestion APIs when
            each behavior happens.
          </p>

          <p>
            In the simplest possible terms,<strong>
              it takes about 30 minutes to implement a single tracked event in
              your product.</strong
            >
          </p>

          <p>
            This includes writing code, verifying the data, passing stress
            tests, and merging that code to the next “branch” in your
            development environment. Since most of our customers send between 20
            and 60 unique events to Mixpanel per product, a rough estimate of
            the total ‘dev hours’ required from your team’s engineering
            resources would range between 10 and 30 hours.&nbsp;
          </p>

          <div class="wp-block-image">
            <figure class="aligncenter is-resized">
              <img
                class="wp-image-20886"
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-3.28.50-PM-1024x461.png"
                alt=""
                width="600"
              />
              <figcaption>
                The total ‘dev hours’ required to implement Mixpanel ranges
                between 10 and 30 hours.
              </figcaption>
            </figure>
          </div>

          <p>
            This implementation happens over a period of one to three weeks
            (usually broken out into several sprints or milestones) and is
            always preceded by a ‘what to track’ strategy session, which
            generally takes product teams between one to two weeks to complete.
          </p>

          <p>
            Most of our customers have a clear roadmap for their Mixpanel
            implementation on or before day 10, and are finished by day 40.
          </p>

          <h2>The longer, better answer</h2>

          <p>
            While the short, TL;DR answer above offers a crude estimate, it
            doesn’t account for the complexity of every application and the
            scope of the systems involved, nor does it factor in any data
            strategies that are already in place. So let me give you a
            <em>better</em> answer.
          </p>

          <p>
            When it comes to evaluating your Mixpanel implementation strategy, I
            like to walk teams through three key considerations:
          </p>

          <ol>
            <li>
              Do we already have the data, or do we need Mixpanel to collect it?
            </li>
            <li>
              Do we want Mixpanel to track behaviors on the client side, or
              server side?
            </li>
            <li>
              Do we want to use a Mixpanel SDK? Or do we want to use our own?
            </li>
          </ol>

          <p>Let’s dive deeper into each.</p>

          <h4>
            1. Do we already have the data, or do we need Mixpanel to collect
            it?
          </h4>

          <p>
            Many companies come to us <em>without</em> a
            <a
              href="https://mixpanel.com/blog/2019/10/28/data-governance-an-8-step-program/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >data strategy or schema</a
            >
            in place. For these customers, Mixpanel provides value as the
            primary source of data ingestion, responsible for securely
            collecting, storing, and processing all the data that’s collected.
            This usually means customers will implement an SDK (Software
            Development Kit; detailed below), or set up real-time API calls that
            connect to Mixpanel’s data ingestion endpoints.
          </p>

          <p>
            <strong>As a developer, </strong>if you’re using a Mixpanel SDK, it
            takes about an hour to get the SDK installed and learn all the
            relevant methods (less time if you’re familiar with implementations
            that use <span style="font-family: courier new">.track()</span> and
            <span style="font-family: courier new">.identify()</span> to send
            data to a third-party). After you’re familiar with the SDK, the ‘30
            mins per event’ rule above is a fair estimate.
          </p>

          <p>
            And when you’re done, you might have
            <a
              href="https://gist.github.com/ak--47/eb9e12d968d287cc0e5f4f30e5f490c1"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="something that looks like this (opens in a new tab)"
              >something that looks like this</a
            >.
          </p>

          <p>
            Other companies that come to us
            <em>don’t need help collecting the data</em>. They already have a
            data strategy that includes data warehouses, data lakes,
            batching/queuing/message-brokering, and other types of ETL-centric
            infrastructure. In these cases, we generally recommend using our
            <a
              href="https://help.mixpanel.com/hc/en-us/articles/360000865566-Guide-to-Mixpanel-Implementation"
              >data import APIs</a
            >&nbsp;or
            <a
              href="https://developer.mixpanel.com/reference/connectors-api"
              target="_blank"
              rel="noopener noreferrer"
              >Cloud Import APIs</a
            >, which are built to quickly receive many messages (i.e. data
            points) all at once. Here, customers will send historical data into
            Mixpanel from their servers on-demand, based on a regular schedule.
          </p>

          <p>
            These types of customers usually won’t implement an SDK, and
            therefore, their implementation is more focused on transforming
            existing data than adding code to their product.
          </p>

          <p>
            <strong>As a data engineer, </strong>if you’re using Mixpanel’s
            import APIs, it takes about one to three hours to understand our API
            specification. Once you understand the requirements and data
            formats, you’ll be making API calls to batch-send data to Mixpanel
            that look something like this:
          </p>

          <div class="wp-block-image" style="text-align: left">
            <figure class="aligncenter is-resized">
              <img
                class="wp-image-20908"
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image7.png"
                alt=""
                width="600"
                srcset="
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image7.png         788w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image7-300x52.png  300w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image7-768x134.png 768w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image7-100x17.png  100w
                "
                sizes="(max-width: 788px) 100vw, 788px"
              />
            </figure>

            <p>
              For those who have their data in a data warehouse, Mixpanel’s
              Cloud Import APIs can <i>consume</i> data in the storage bucket
              which will be retrieved at regular intervals (more on Cloud Import
              below).
            </p>
          </div>

          <p>
            And finally, there’s a <em>third class of customers</em> we see:
            those who have already invested in a Customer Data Platform, or CDP
            (like
            <a
              href="https://segment.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >Segment</a
            >, or
            <a
              href="https://www.mparticle.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >mParticle</a
            >) which acts as a central hub for all end-user data.&nbsp;
          </p>

          <p>
            Mixpanel integrates seamlessly with most major CDPs, so in these
            cases, implementation takes <strong>about 15 minutes</strong>.
            You’ll simply plug your key, API secret, and token into the CDP and
            turn on the data connection with Mixpanel:
          </p>

          <div class="wp-block-image">
            <figure class="aligncenter is-resized">
              <img
                loading="lazy"
                class="wp-image-20915"
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/image3.gif"
                alt=""
                width="706"
                height="395"
              />
            </figure>
          </div>

          <p>
            Configuring Mixpanel with a CDP does not require any specific
            technical expertise.
            <strong
              >However, the quality of the data that flows into Mixpanel is only
              as good as the quality of the data flowing into the CDP.</strong
            >
          </p>

          <p>
            Note: most CDPs will require an implementation step that utilizes
            one of their SDKs and/or data import over an API (very similar to
            the two above-mentioned scenarios).
          </p>

          <h4>
            2. Do we want Mixpanel to track behaviors on the client side, or
            server side?
          </h4>

          <p>
            Most digital products have a front-end (‘client side’) and back-end
            (‘server side’). When we begin an implementation with a defined
            analytics strategy, it quickly becomes clear <em>where</em> Mixpanel
            needs to be added. For example:
          </p>

          <p>
            If the KPIs and behaviors are related to things that an end user
            does within the interface or UI of an app (things like ‘filling out
            a form’, ‘watching a video’, or ‘scrolling on a page’), then we
            typically want Mixpanel to record behaviors on the
            <em>client side</em>. Front-end frameworks often provide ‘hooks’ and
            ‘handlers’ to make it easy for your product to signal to Mixpanel
            that the user just performed ‘x’.&nbsp; Therefore, adding Mixpanel
            <a
              href="https://developer.mixpanel.com/docs/implement-mixpanel#client-side-sdks"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >to an existing front-end</a
            >
            is a relatively simple development task, and our SDKs provide a
            streamlined interface for doing so (more on this below).
          </p>

          <p>
            But if the KPIs and behaviors relate to actions taken
            <em>on behalf of </em>a user (things like ‘subscription charged’, or
            ‘password updated’), then we typically want Mixpanel to track
            behaviors on the <em>server side</em>. Because server-side
            applications can vary in complexity and size,
            <strong
              >it’s impossible to make a one-size-fits-all statement for the
              level of effort required</strong
            >.&nbsp;
          </p>

          <p>
            However Mixpanel<em> does</em> maintain
            <a
              href="https://developer.mixpanel.com/docs/implement-mixpanel#server-side-sdks"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >SDKs and software packages</a
            >
            for common back-end languages, which make it easier and more
            enjoyable for developers to add Mixpanel to a server-side
            application.
          </p>

          <p>
            Finally, it’s also perfectly acceptable to track behaviors on the
            <em>client side</em> and <em>server side</em> (many of our customers
            do). This can require more time as it adds to the overall ‘surface
            area’ of the analytics project, including the teams and people
            involved. Customers who take this hybrid approach will often track
            the majority of their events on the client side and a couple of
            events on the server side.
          </p>

          <h4>
            <strong
              >3. Do we want to use a Mixpanel SDK? Or do we want to build our
              own classes?</strong
            >
          </h4>

          <p>
            Mixpanel
            <a
              href="https://developer.mixpanel.com/docs/implement-mixpanel#mixpanel-sdks"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >maintains SDKs</a
            >
            that provide simple interfaces for tracking events and updating user
            profiles on many different platforms. They also provide helpful
            functionality like default properties, methods for managing user
            IDs, data binding, persistence, and much more.
          </p>

          <p>
            Whether it’s front-end or back-end, these SDKs offer an easy-to-use
            interface for sending events to Mixpanel:
          </p>

          <pre class="wp-block-verse" style="text-align: center">
mixpanel.track('something happened!', {"and it": "was great!"})</pre
          >

          <p>&nbsp;</p>

          <p>
            If the engineering team is comfortable adding an SDK to their
            codebase,
            <strong
              >it’s definitely the simplest way to get the most amount of data
              with the least amount of time and effort.</strong
            >
          </p>

          <p>
            However, not all companies are comfortable including third-party
            code in certain areas of their product (e.g. banks, financial
            exchanges, healthcare institutions, etc.). We certainly understand
            that concern, and for this reason, we expose and document all the
            API routes that Mixpanel uses to send data such that you can
            <a
              href="https://developer.mixpanel.com/docs/http#tracking-via-http"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >build your own classes</a
            >
            and methods to track data however you see fit.
          </p>

          <p>
            While this takes longer than using an SDK because it requires your
            team to build your own piping, it allows you to keep your codebase
            free of third-party packages, and for some customers that investment
            is worth it.
          </p>

          <p>
            Here’s a quick example of what an implementation of
            <span style="font-family: courier new">track()</span> with no
            dependencies
            <a
              href="https://gist.github.com/ak--47/2dac48e56f3ee44502cb6a42e00c0821"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="might look like. (opens in a new tab)"
              >might look like.</a
            >
          </p>
          <p>
            <span style="font-weight: 400"
              >For companies using a cloud storage provider (like AWS, GCP,
              Snowflake, or Azure) to join many data sources together in one
              place as a “source of truth”, </span
            ><a
              href="https://mixpanel.com/blog/the-difference-between-product-analytics-and-bi-tools-and-why-you-need-both/"
              ><span style="font-weight: 400"
                >adding Mixpanel to their data stack through a feature called
                Cloud Import</span
              ></a
            ><span style="font-weight: 400">
              is a seamless way to self-serve answers to questions about users
              without the need for a data expert.</span
            >
          </p>

          <p>
            Of course,
            <strong
              >if you want to be more hands-off with your implementation, or
              don’t have the expertise (or bandwidth) on your team</strong
            >, there are qualified
            <a href="https://mixpanel.com/partners/">Mixpanel solutio</a
            ><a
              href="https://mixpanel.com/partners/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="n (opens in a new tab)"
              >n</a
            ><a href="https://mixpanel.com/partners/">s partners</a> that can
            help with any aspect of it.
          </p>

          <h2>Post-implementation</h2>

          <p>
            After you’ve completed your implementation, Mixpanel provides a
            number of resources to assist you in QA-ing the project, and ensure
            that you maintain data integrity over time.&nbsp;
          </p>

          <p>
            For example,
            <a
              href="https://help.mixpanel.com/hc/en-us/articles/115005524446#live-view"
              >Live View</a
            >
            lets you see the events sent to your Mixpanel project in real-time
            to verify they’re up to spec, and
            <a
              href="https://help.mixpanel.com/hc/en-us/articles/360001307806-Lexicon-Overview"
              >Lexicon</a
            >
            allows you to add event and property descriptions (as well as other
            useful metadata) that will appear directly
            <a
              href="https://mixpanel.com/get-started/?explore=True"
              target="_blank"
              rel="noreferrer noopener"
              aria-label=" (opens in a new tab)"
              >within the Mixpanel UI</a
            >.
          </p>

          <div class="wp-block-image">
            <figure class="aligncenter">
              <img
                loading="lazy"
                width="1024"
                height="504"
                class="wp-image-20937"
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-1024x504.png"
                alt=""
                srcset="
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-1024x504.png 1024w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-300x148.png   300w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-768x378.png   768w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-100x49.png    100w,
                  https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-17-at-4.14.41-PM-1100x541.png 1100w
                "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption>
                Post-implementation, Mixpanel’s Data Management features make it
                easy to ensure the integrity of your data.
              </figcaption>
            </figure>
          </div>

          <p>
            Ultimately, the best estimate for the amount of time and effort you
            should allocate for your Mixpanel implementation is a combination of
            these three decision points.
          </p>

          <p>
            <em
              >And we would love to help you scope it out. Get in touch with our
              team
              <a
                href="https://mixpanel.com/contact-us/sales/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label=" (opens in a new tab)"
                >here</a
              >. Ready to implement? Head to
              <a
                href="https://community.mixpanel.com/strategy-and-planning-9/implementation-checklist-4272"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="QBQ \ The Mixpanel Community (opens in a new tab)"
                >QBQ | The Mixpanel Community</a
              >
              for a detailed implementation checklist.</em
            >
          </p>
        </div>

        <div class="cont-holder">
          <ul class="tags-list">
            <li>
              <a href="https://mixpanel.com/blog/tag/implementation/" rel="tag"
                >implementation</a
              >
            </li>
            <li>
              <a
                href="https://mixpanel.com/blog/tag/product-analytics/"
                rel="tag"
                >product analytics</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="details-articles">
      <h2 class="details-articles-h2">相关文章</h2>
      <div class="news-content">
        <div v-for="i in 3" :key="i" class="news-content-item">
          <nuxt-link
            :to="{ name: 'resource-new-id', params: { id: i } }"
            class="news-content-item-card"
          >
            <div class="news-content-item-img">
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Mixpanel-Implementation-Final-Compressed.jpg"
                class="attachment-full"
                alt="Mixpanel-Implementation-Final-Compressed"
              />
            </div>
            <div class="news-content-item-text">
              <strong class="subtitle">Product Foundations</strong>
              <h4 class="details-articles-h4">
                How to protect customer data while running smarter A/B tests
              </h4>
              <p>
                How long does it take to implement Mixpanel? A 3-step evaluation
              </p>
            </div>
            <div class="blog-cite">
              <a
                href="https://mixpanel.com/blog/author/natasha-wahid/"
                class="blog-cite-a"
              >
                <div class="avatar">
                  <img
                    src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/Natasha_HS-e1629333888646.jpeg"
                    alt=""
                  />
                </div>
                <div class="per-info">
                  <strong class="name">Natasha Wahid</strong>
                  <span class="designation">AB Tasty</span>
                </div>
              </a>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'details',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
