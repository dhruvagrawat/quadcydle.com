"use client";

import { Features } from "../Homepage/features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Powerful Web Development
            <br /> & SEO That Converts
          </>
        }
        image="/issues.webp"
        text="We build fast, beautiful websites optimized to rank on Google and turn visitors into loyal customers — with measurable results from day one."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Custom Development",
            text: "Tailored websites and apps built to your exact specifications and brand.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "SEO Optimization",
            text: "Rank higher, drive organic traffic, and stay ahead of competitors.",
          },
          {
            icon: WorkflowsIcon,
            title: "CMS Integration",
            text: "Manage your own content effortlessly with modern CMS platforms.",
          },
          {
            icon: CustomViewsIcon,
            title: "Performance Audits",
            text: "Regular checks to keep your site blazing fast and fully secure.",
          },
          {
            icon: DiscussionIcon,
            title: "Analytics Setup",
            text: "Data-driven insights to understand your audience and inform growth.",
          },
          {
            icon: IssuesIcon,
            title: "E-commerce Ready",
            text: "Build and scale your online store with confidence and full support.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Flexible Project Views",
            text: "Track every deliverable and milestone so your launch goes smoothly.",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Custom Dashboards",
            text: "See your site's performance at a glance — traffic, rankings, and conversions.",
          },
        ]}
      />
    </Features>
  );
};
