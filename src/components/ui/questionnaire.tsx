"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface QuestionnaireOption {
  value: string;
  label: string;
}

export interface QuestionnaireQuestion {
  id: string;
  title: string;
  description?: string;
  multi?: boolean;
  options: QuestionnaireOption[];
}

export interface QuestionnaireProps {
  questions?: QuestionnaireQuestion[];
  title?: string;
  description?: string;
  submitLabel?: string;
  onSubmit?: (answers: Record<string, Record<string, boolean>>) => void;
  className?: string;
}

export function Questionnaire({
  questions,
  title = "How satisfied are you with Qalvin UI?",
  description = "Select one option below.",
  submitLabel = "Submit Feedback",
  onSubmit,
  className,
}: QuestionnaireProps) {
  const defaultQuestions: QuestionnaireQuestion[] = React.useMemo(
    () => [
      {
        id: "satisfaction",
        title,
        description,
        options: [
          { value: "excellent", label: "⚡ Extremely Satisfied" },
          { value: "good", label: "👍 Very Good" },
        ],
      },
    ],
    [title, description]
  );

  const items = questions ?? defaultQuestions;
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, Record<string, boolean>>>({});

  const question = items[Math.min(step, items.length - 1)];
  const isLast = step >= items.length - 1;
  const selected = answers[question.id] ?? {};
  const hasAnswer = Object.keys(selected).length > 0;

  const toggle = (value: string) => {
    setAnswers((prev) => {
      if (question.multi) {
        const current = prev[question.id] ?? {};
        return { ...prev, [question.id]: { ...current, [value]: !current[value] } };
      }
      return { ...prev, [question.id]: { [value]: true } };
    });
  };

  const handleNext = () => {
    if (!hasAnswer) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleSubmit = () => {
    if (!hasAnswer) return;
    onSubmit?.(answers);
  };

  const progress = items.length > 0 ? ((step + 1) / items.length) * 100 : 100;

  return (
    <div
      className={cn("w-full max-w-sm space-y-4 rounded-xl border bg-card p-5 shadow-sm", className)}
    >
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-bold">{question.title}</h4>
        {question.description ? (
          <p className="text-xs text-muted-foreground">{question.description}</p>
        ) : null}
      </div>

      <div className="space-y-2" role="radiogroup" aria-label={question.title}>
        {question.options.map((option) => {
          const checked = Boolean(selected[option.value]);
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => toggle(option.value)}
              className={cn(
                "flex items-center justify-start gap-2.5 rounded-lg border p-2.5 text-left text-xs font-medium transition-colors w-full",
                checked ? "border-ring bg-accent/50" : "hover:border-ring/40 hover:bg-muted/40"
              )}
            >
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                  checked ? "border-primary bg-primary" : "border-muted-foreground/40"
                )}
              >
                {checked ? <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" /> : null}
              </span>
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Back
          </button>
        ) : null}
        {!isLast ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={!hasAnswer}
            className={cn(
              "flex-1 rounded-md px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors",
              hasAnswer ? "bg-primary hover:bg-primary/90" : "cursor-not-allowed bg-muted"
            )}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!hasAnswer}
            className={cn(
              "flex-1 rounded-md px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors",
              hasAnswer ? "bg-primary hover:bg-primary/90" : "cursor-not-allowed bg-muted"
            )}
          >
            {submitLabel}
          </button>
        )}
      </div>

      <p className="text-center text-[10px] text-muted-foreground">
        Step {step + 1} of {items.length}
      </p>
    </div>
  );
}

export default Questionnaire;
