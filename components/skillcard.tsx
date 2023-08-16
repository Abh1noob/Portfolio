import React from "react";

type SkillCardProps = {
  children: React.ReactNode;
};

export default function SkillCard({ children }: SkillCardProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}