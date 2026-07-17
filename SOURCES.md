# Sources and Adaptation Record

เอกสารนี้บันทึกแหล่งอ้างอิงทางเทคนิคเท่านั้น เนื้อหาที่ผู้เรียนเห็นถูกปรับเป็นสถานการณ์กลางและเขียนใหม่ให้สอดคล้องกับ agenda ปัจจุบัน

## Reference repositories

| Source | Branch | Pinned commit | Adapted material |
|---|---|---|---|
| `teerasej/ai-for-everyone` | `tokio-marine-life` | `a1c3ba7a5dbfb6be2a9cc8e1a0ddc0e2c4b16b12` | Copilot Chat, Microsoft 365 app practice, Agent Builder flow, neutral business idea/presentation/revenue files, selected original UI screenshots |
| `teerasej/SET-ai-creation-public` | `main` | `56a739fea80c9abc5edbeacf45c68555c70f3e11` | Copilot Studio knowledge, Agent Flow, testing and canvas patterns, selected original UI screenshots and GIF |

ไม่คัดลอก exercise directory ทั้งชุด ข้อความและ learner artifacts ถูกปรับเป็นสถานการณ์กลาง แต่ภาพที่เลือกถูกคัดลอกแบบ byte-for-byte ตามข้อกำหนด จึงอาจยังแสดงชื่อผู้ใช้ tenant บริษัท ชื่อไฟล์ หรือตัวแปรจาก source exercise เดิม ผู้เรียนต้องยึดค่าที่เขียนในขั้นตอนปัจจุบัน

## Microsoft guidance

- [Add a public website knowledge source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)
- [Publish and manage channels](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Share an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-share-bots?tabs=teams)
- Public website knowledge fixed in the exercise: <https://learn.microsoft.com/en-us/copilot/>

## Screenshot source-to-output audit

Source key `M365` หมายถึง commit `a1c3ba7a5dbfb6be2a9cc8e1a0ddc0e2c4b16b12` และ `Studio` หมายถึง commit `56a739fea80c9abc5edbeacf45c68555c70f3e11` ภาพถูกเปลี่ยนเฉพาะชื่อไฟล์ปลายทางเป็น kebab-case โดยไม่เปลี่ยน binary content

| Source | Source image path | Output image path | Used after learner action |
|---|---|---|---|
| M365 | `images/copilot/m365-copilot-chat.png` | `m365-copilot/01-copilot-chat-and-work-iq/images/open-microsoft-365-copilot-chat.png` | Open Microsoft 365 Copilot |
| M365 | `images/copilot/Screenshot 2568-08-22 at 00.18.40.png` | `m365-copilot/01-copilot-chat-and-work-iq/images/select-work-context.png` | Select Work context |
| M365 | `images/copilot/2025-08-23_21-41-54.png` | `m365-copilot/02-copilot-in-m365-apps/images/open-business-idea-in-word-web.png` | Open the Word source file |
| M365 | `images/copilot/2025-08-23_22-01-09.png` | `m365-copilot/02-copilot-in-m365-apps/images/open-copilot-in-word.png` | Open Copilot in Word |
| M365 | `images/copilot/2025-08-23_22-02-47.png` | `m365-copilot/02-copilot-in-m365-apps/images/enter-prompt-in-word-copilot.png` | Enter the Word prompt |
| M365 | `images/copilot/2025-09-28_23-03-57.png` | `m365-copilot/02-copilot-in-m365-apps/images/insert-copilot-result-in-word.png` | Insert the checked result |
| M365 | `images/copilot/2025-08-23_22-43-23.png` | `m365-copilot/02-copilot-in-m365-apps/images/open-copilot-pane-in-powerpoint.png` | Open the PowerPoint Copilot pane |
| M365 | `images/copilot/2025-10-07_15-59-48.png` | `m365-copilot/02-copilot-in-m365-apps/images/open-workbook-in-excel-web.png` | Open the workbook in Excel web |
| M365 | `images/copilot/2026-03-24_22-46-55.png` | `m365-copilot/02-copilot-in-m365-apps/images/open-copilot-in-excel.png` | Open Copilot in Excel |
| M365 | `images/copilot/2025-08-23_22-54-27.png` | `m365-copilot/02-copilot-in-m365-apps/images/create-new-email-in-outlook.png` | Create a new Outlook message |
| M365 | `images/copilot/2025-08-23_22-54-35.png` | `m365-copilot/02-copilot-in-m365-apps/images/start-draft-with-copilot-in-outlook.png` | Open Draft with Copilot |
| M365 | `images/copilot/2025-08-23_22-55-26.png` | `m365-copilot/02-copilot-in-m365-apps/images/review-copilot-email-draft.png` | Review the generated draft |
| M365 | `images/copilot/2025-08-23_22-56-09.png` | `m365-copilot/02-copilot-in-m365-apps/images/keep-copilot-email-draft.png` | Keep the checked draft |
| M365 | `images/pre-training-checklist/check-agent-builder.png` | `m365-copilot/03-build-sales-proposal-assistant/images/open-agent-builder.png` | Open Agent Builder |
| M365 | `images/pre-training-checklist/check-new-agent.png` | `m365-copilot/03-build-sales-proposal-assistant/images/create-new-agent.png` | Select New agent |
| M365 | `images/agent/2025-08-24_14-26-02.png` | `m365-copilot/03-build-sales-proposal-assistant/images/open-agent-configure-tab.png` | Select Configure |
| M365 | `images/agent/2025-08-24_14-31-02.png` | `m365-copilot/03-build-sales-proposal-assistant/images/upload-agent-knowledge-files.png` | Upload agent knowledge |
| M365 | `images/agent/2025-08-24_13-42-19.png` | `m365-copilot/03-build-sales-proposal-assistant/images/create-agent-after-testing.png` | Create the configured agent |
| M365 | `images/agent/2025-08-24_13-42-42.png` | `m365-copilot/03-build-sales-proposal-assistant/images/open-agent-sharing-settings.png` | Open sharing settings |
| Studio | `exercises/module-4/exercise-1-hybrid-topic-with-generative/images/click-add-knowledge.png` | `copilot-studio/02-add-knowledge/images/open-add-knowledge.png` | Select Add knowledge |
| Studio | `exercises/module-4/exercise-1-hybrid-topic-with-generative/images/upload-knowledge-files.png` | `copilot-studio/02-add-knowledge/images/upload-copilot-adoption-guide.png` | Upload the guide |
| Studio | `exercises/module-4/exercise-1-hybrid-topic-with-generative/images/add-files-to-agent.png` | `copilot-studio/02-add-knowledge/images/add-uploaded-file-to-agent.png` | Add the uploaded file |
| Studio | `exercises/module-4/exercise-1-hybrid-topic-with-generative/images/check-knowledge-status.png` | `copilot-studio/02-add-knowledge/images/check-knowledge-source-status.png` | Check source status |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/add-new-agent-flow.png` | `copilot-studio/03-add-email-tool-and-publish/images/create-new-agent-flow.png` | Create an Agent Flow |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/save-draft-and-publish.png` | `copilot-studio/03-add-email-tool-and-publish/images/save-draft-and-publish-flow.png` | Save the new flow draft |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/configure-flow-inputs.png` | `copilot-studio/03-add-email-tool-and-publish/images/configure-agent-flow-inputs.png` | Configure flow inputs |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/send-email-v2.png` | `copilot-studio/03-add-email-tool-and-publish/images/add-send-email-v2-action.png` | Add Send an email (V2) |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/use-dynamic-content.png` | `copilot-studio/03-add-email-tool-and-publish/images/map-email-fields-with-dynamic-content.png` | Map dynamic content |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/map-output-response.gif` | `copilot-studio/03-add-email-tool-and-publish/images/map-flow-output-response.gif` | Map the flow response |
| Studio | `exercises/module-4/exercise-2-agent-flow-send-email-action/images/select-agent-flow-tool.png` | `copilot-studio/03-add-email-tool-and-publish/images/select-published-agent-flow-tool.png` | Add the published flow as a tool |

## Intentionally excluded source-only visuals

- M365 source actions that are not retained: Chat copy/share/history/file-upload/image generation, Word table/image-generation variations, the PowerPoint create-from-file path, Excel formula/format/chart variations, Outlook thread summary, and optional Agent code capability.
- Copilot Studio source actions that are not retained: financial-report topic branches, prompt actions, hybrid orchestration, fallback configuration, and topic-specific cancel paths.
- Foundation Day and the reflection-only sections remain image-free because they do not reuse application UI actions from the source repositories.
