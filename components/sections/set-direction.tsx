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

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Scale Your Business
            <br />
            with Expert Strategy
          </>
        }
        image="/roadmap.webp"
        imageSize="large"
        text="From go-to-market planning to partnership development, we help ambitious businesses build a clear path to sustainable, long-term growth."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Market Research",
            text: "Deep insights into your industry, competitors, and target audience.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Growth Planning",
            text: "Strategic roadmaps aligned tightly to your business goals.",
          },
          {
            icon: WorkflowsIcon,
            title: "Brand Positioning",
            text: "Define and communicate your unique value to the right market.",
          },
          {
            icon: CustomViewsIcon,
            title: "Partnership Development",
            text: "Identify and cultivate strategic business relationships.",
          },
          {
            icon: DiscussionIcon,
            title: "Conversion Optimization",
            text: "Turn more visitors into paying, loyal customers.",
          },
          {
            icon: IssuesIcon,
            title: "Quarterly Reviews",
            text: "Regular check-ins to refine strategy and measure real success.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-updates.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Strategic Insights",
            text: "Stay ahead with data-driven business intelligence and market analysis.",
          },
          {
            image: "/card-roadmaps.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Growth Roadmaps",
            text: "Visualize your path to success with clear milestones and accountability.",
          },
        ]}
      />
    </Features>
  );
};
