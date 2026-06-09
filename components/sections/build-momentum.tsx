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

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Grow Your Audience
            <br />
            with Digital Marketing
          </>
        }
        image="/cycles.webp"
        imageSize="large"
        text="Strategic social media management, paid advertising, and content marketing that connects your brand with the right audience at exactly the right moment."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Social Media Management",
            text: "Consistent, engaging presence across all major platforms.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Paid Advertising",
            text: "ROI-focused ad campaigns on Google, Meta, and beyond.",
          },
          {
            icon: WorkflowsIcon,
            title: "Content Strategy",
            text: "Compelling content that builds authority, trust, and engagement.",
          },
          {
            icon: CustomViewsIcon,
            title: "Email Campaigns",
            text: "Nurture leads and retain customers with targeted email sequences.",
          },
          {
            icon: DiscussionIcon,
            title: "Influencer Outreach",
            text: "Partner with voices that authentically amplify your brand.",
          },
          {
            icon: IssuesIcon,
            title: "Campaign Reporting",
            text: "Clear, honest reports showing exactly what's working and what's next.",
          },
        ]}
      />
    </Features>
  );
};
