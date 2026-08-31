"use client";

import React, { useState, useRef, useEffect } from "react";
import { PortfolioData } from "@/types";

interface TerminalProps {
  data: PortfolioData;
}

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function Terminal({ data }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [outputs, setOutputs] = useState<CommandOutput[]>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const availableCommands = [
    "help",
    "about",
    "skills",
    "projects",
    "contact",
    "cat resume.txt",
    "date",
    "clear",
    "matrix",
    "sudo",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputs]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setOutputs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: "",
          output: null,
        },
      ]);
      return;
    }

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        resultNode = (
          <div className="space-y-1 text-xs">
            <div className="text-muted-400 font-semibold mb-1">
              Available system commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-muted-300">
              <div>
                <span className="text-contrast font-semibold">help</span>{" "}
                &mdash; List commands
              </div>
              <div>
                <span className="text-contrast font-semibold">about</span>{" "}
                &mdash; Profile bio
              </div>
              <div>
                <span className="text-contrast font-semibold">skills</span>{" "}
                &mdash; Technical stack
              </div>
              <div>
                <span className="text-contrast font-semibold">projects</span>{" "}
                &mdash; Production work
              </div>
              <div>
                <span className="text-contrast font-semibold">experience</span>{" "}
                &mdash; Work history
              </div>
              <div>
                <span className="text-contrast font-semibold">contact</span>{" "}
                &mdash; Reach author
              </div>
              <div>
                <span className="text-contrast font-semibold">
                  cat resume.txt
                </span>{" "}
                &mdash; Print resume
              </div>
              <div>
                <span className="text-contrast font-semibold">date</span>{" "}
                &mdash; Local author time
              </div>
              <div>
                <span className="text-contrast font-semibold">clear</span>{" "}
                &mdash; Clear buffer
              </div>
            </div>
          </div>
        );
        break;

      case "about":
        resultNode = (
          <div className="space-y-1 text-xs text-muted-300">
            <div className="font-semibold text-contrast">
              {data.profile.name} &mdash; {data.profile.title}
            </div>
            <div>{data.profile.bioShort}</div>
            <div className="text-muted-500">
              Location: {data.profile.location}
            </div>
          </div>
        );
        break;

      case "skills":
        resultNode = (
          <div className="space-y-2 text-xs text-muted-300">
            {data.skillsRows.map((cat, idx) => (
              <div key={idx}>
                <div className="text-contrast font-semibold">
                  [{cat.category}]
                </div>
                <div className="text-muted-400">{cat.items.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        resultNode = (
          <div className="space-y-2 text-xs text-muted-300">
            {data.projects.map((p, idx) => (
              <div key={idx} className="border-l border-muted-700 pl-2">
                <div className="text-contrast font-semibold">{p.title}</div>
                <div className="text-muted-400">{p.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        resultNode = (
          <div className="space-y-1 text-xs text-muted-300">
            <div>
              Email:{" "}
              <a
                href={`mailto:${data.profile.socials.email}`}
                className="text-contrast underline"
              >
                {data.profile.socials.email}
              </a>
            </div>
            <div>GitHub: {data.profile.socials.github}</div>
            <div>LinkedIn: {data.profile.socials.linkedin}</div>
          </div>
        );
        break;

      case "cat":
        if (args[0] === "resume.txt" || args[0] === "resume") {
          resultNode = (
            <pre className="text-xs text-muted-400 font-mono whitespace-pre-wrap">
              {`============================================================

RESUME: ${data.profile.name.toUpperCase()}
TITLE: ${data.profile.title}
LOCATION: ${data.profile.location}
EMAIL: ${data.profile.socials.email}

[SUMMARY]

${data.profile.bioLong}

[CORE STACK]

${data.skillsRows
  .map((row) => `${row.category}: ${row.items.join(", ")}`)
  .join("\n")}

[PROJECTS]

${data.projects
  .map((project) => `${project.title} — ${project.category}`)
  .join("\n")}

[STATUS]

${data.profile.status.text}

============================================================`}
            </pre>
          );
        } else {
          resultNode = (
            <div className="text-xs text-muted-500">
              cat: {args[0] || ""}: File not found. Try{" "}
              <code className="text-contrast">cat resume.txt</code>
            </div>
          );
        }
        break;

      case "matrix":
        resultNode = (
          <div className="text-xs text-contrast font-mono tracking-widest opacity-80">
            01000001 01000100 01001110 01000001 01001110
            <br />
            SYSTEM SIMULATION · ACCESS GRANTED
          </div>
        );
        break;
      case "date":
        resultNode = (
          <div className="text-xs text-muted-300">
            Local Author Time ({data.profile.timezone}):{" "}
            <span className="text-contrast font-semibold">
              {new Date().toLocaleString("en-US", {
                timeZone: data.profile.timezone,
              })}
            </span>
          </div>
        );
        break;

      case "sudo":
        resultNode = (
          <div className="text-xs text-muted-400">
            [ACCESS DENIED] User is not in sudoers file. Please schedule an
            interview to proceed.
          </div>
        );
        break;

      case "clear":
        setOutputs([]);
        return;

      default:
        resultNode = (
          <div className="text-xs text-muted-400">
            Command not recognized:{" "}
            <span className="text-contrast font-semibold">{cmd}</span>. Type{" "}
            <span className="text-contrast font-semibold">help</span> for all
            commands.
          </div>
        );
        break;
    }

    setOutputs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: resultNode,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx =
          historyIdx + 1 < history.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInput(history[history.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[history.length - 1 - nextIdx] || "");
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const matched = availableCommands.filter((c) => c.startsWith(current));
      if (matched.length === 1) {
        setInput(matched[0]);
      }
    }
  };

  return (
    <section id="terminal" className="py-24 border-b border-muted-700/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 mb-8">
          <div className="font-mono text-xs text-muted-500 uppercase tracking-widest">
            // 05. INTERACTIVE CLI EMULATOR
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-contrast font-sans">
            Developer Terminal
          </h2>
          <p className="text-xs sm:text-sm text-muted-400 font-light">
            Direct interface for querying repository specifications,
            capabilities, and system records.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-lg bg-base-950 border border-muted-700/90 shadow-2xl overflow-hidden font-mono text-xs cursor-text"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-base-900 border-b border-muted-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-600" />
            </div>
            <div className="text-muted-500 text-[11px]">
              visitor@mohd-adnan-cli:~
            </div>
            <div className="text-muted-500 text-[11px]">
              bash &middot; 80x24
            </div>
          </div>

          {/* Buffer */}
          <div className="p-4 sm:p-6 space-y-3 min-h-[320px] max-h-[460px] overflow-y-auto">
            {/* Initial Welcome */}
            <div className="text-muted-400 space-y-1">
              <div>
                Mohd Adnan CLI · System Telemetry v1.0.0
              </div>
              <div>
                Type <span className="text-contrast font-semibold">help</span>{" "}
                to list commands or press{" "}
                <span className="text-contrast font-semibold">Tab</span> for
                autocomplete.
              </div>
              <div className="border-b border-muted-700/60 pt-2" />
            </div>

            {/* Output History */}
            {outputs.map((out) => (
              <div key={out.id} className="space-y-1">
                {out.command && (
                  <div className="flex items-center gap-2 text-muted-400">
                    <span className="text-contrast font-semibold">&gt;</span>
                    <span>{out.command}</span>
                  </div>
                )}
                {out.output && <div className="pl-4">{out.output}</div>}
              </div>
            ))}

            {/* Input Row */}
            <div className="flex items-center gap-2 text-contrast">
              <span className="text-contrast font-semibold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command..."
                className="flex-grow bg-transparent outline-none text-contrast font-mono text-xs placeholder:text-muted-600"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
