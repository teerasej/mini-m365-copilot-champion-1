# Day 2 Advanced Labs — Microsoft 365 Copilot

## Exercise Overview

สำหรับชุด Advanced Labs นี้ พลได้ออกแบบให้ต่อยอดจากแบบฝึกหัดหลักของ Day 2 นะครับ โดยพวกเราจะฝึกทำความเข้าใจในพื้นฐานเบื้องลึกของ Microsoft 365 Copilot และทดลองปรับใช้กับ workflow ของเราเอง โดยสามารถเลือกได้อย่างอิสระครับ

## Prerequisites

1. ใช้บัญชีองค์กรที่มี **Microsoft 365 Copilot license**
2. ผ่านแบบฝึกหัดหลัก Copilot Chat, Word, PowerPoint, Excel และ Outlook + Teams
3. มี AI Use Canvas จาก Day 1
4. [ดาวน์โหลด Day 2 sample files ทั้งหมด (.zip)](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/downloads/day-2-sample-files.zip) หรือเลือกจาก [รายการไฟล์สำหรับ Day 2](../sample-files.md) แล้วเตรียมไฟล์ต่อไปนี้ใน OneDrive
   - `Krungsri_BranchOps_Report_Source.docx`
   - `Krungsri_BranchKPI_28days.xlsx`
   - ผลงาน `Krungsri_BranchOps_ExecutiveSummary.docx` จากแบบฝึกหัดหลัก
   - `branch-operations-review-15min.vtt`
5. ตรวจสอบสิทธิ์ของ Agent, Teams transcription, Copilot Pages, Copilot Notebooks และ Copilot Memory ก่อนเลือก Lab ที่เกี่ยวข้อง

> Feature บางรายการขึ้นอยู่กับ tenant policy และการ rollout ของ Microsoft หากไม่เห็นเมนูตามขั้นตอน ให้ใช้ fallback ที่ระบุไว้ใน Lab นั้น

## เลือกเส้นทาง Advanced Lab

### เส้นทาง A: เพิ่มความแม่นยำของ Copilot Chat

1. [เข้าใจการทำงาน Context, Source และ Response Modes](01-context-and-response-modes/README.md)
2. [สร้าง Prompt Library ของทีมด้วย Prompt Gallery](02-prompt-gallery-team-library/README.md)
3. [เปลี่ยนคำตอบเป็นงานร่วมกันด้วย Copilot Pages และ Notebooks](03-pages-and-notebooks/README.md)
4. [แยก Memory ออกจาก Context และ Temporary Chat](04-memory-and-temporary-chat/README.md)

### เส้นทาง B: เชื่อมหลาย Microsoft 365 apps เป็น Workflow

5. [Branch Operations Decision Pack](05-branch-operations-decision-pack/README.md)
6. [เปรียบเทียบ Microsoft-built Agents](06-microsoft-built-agent-lab/README.md)
7. [สร้าง Agent จาก AI Use Canvas](07-agent-builder-from-ai-use-canvas/README.md)
8. [Microsoft 365 App Deep-dive Cards](08-m365-app-deep-dive-cards/README.md)

## ทดลองกับงานจริงของเรา

1. [AI Use Canvas Experiment Studio](09-ai-use-canvas-experiment-studio/README.md)


## Official Microsoft References

- [Overview of Microsoft 365 Copilot Chat and response modes](https://learn.microsoft.com/copilot/overview)
- [Refer to files, people, meetings, emails and more with Work IQ](https://support.microsoft.com/en-us/topic/using-context-iq-to-refer-to-specific-files-people-and-more-in-microsoft-365-copilot-and-copilot-chat-272ac2c1-c5f7-49c9-8a42-2a8a87846fa0)
- [Understand Prompt Gallery in Copilot](https://learn.microsoft.com/microsoft-365/copilot/copilot-prompt-gallery)
- [Get started with Microsoft 365 Copilot Pages](https://support.microsoft.com/en-us/topic/introducing-microsoft-365-copilot-pages-6674bd51-9ff5-42c4-9256-44d9428a726f)
- [Get started with Microsoft 365 Copilot Notebooks](https://support.microsoft.com/en-us/topic/get-started-with-microsoft-365-copilot-notebooks-0775e693-11c6-4d80-8aba-fcc81a737a06)
- [Manage Copilot personalization and memory](https://learn.microsoft.com/microsoft-365/copilot/copilot-personalization-memory)
- [Get started with Researcher agent](https://learn.microsoft.com/microsoft-365/copilot/researcher-agent)
- [Get started with Word, Excel and PowerPoint Agents](https://learn.microsoft.com/microsoft-365/copilot/wordexcelppt-agents)
- [Get started with Surveys Agent](https://support.microsoft.com/en-us/topic/get-started-with-surveys-agent-in-microsoft-365-copilot-ddad28f2-386b-4f81-8a07-8ac4ee8f6bd8)
- [Build agents with Agent Builder in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)

## Checkpoint

- เลือก Lab จากปัญหางาน ไม่ใช่เลือกจากชื่อ feature
- ระบุ source และสิทธิ์ที่ Copilot ต้องใช้ก่อนเริ่ม
- ทุก Lab มี human checkpoint เพื่อตรวจความถูกต้องและความเหมาะสม
- ไม่มีข้อมูลลูกค้าจริง ข้อมูลลับ หรือข้อมูลส่วนบุคคลใน prompt และไฟล์ทดลอง

## Expected Output

- ผลงานจาก Advanced Lab อย่างน้อย 1 ชิ้น
- Prompt หรือ Agent test ที่มีหลักฐานเปรียบเทียบ
- AI Use Canvas ที่อัปเดตจากผลการทดลองจริง

## Optional Extension

เลือก Lab เดียวกันกับเพื่อน แต่ใช้คนละ response mode หรือคนละ Microsoft 365 app แล้วเปรียบเทียบว่าวิธีใดเหมาะกับ workflow มากกว่า

[กลับไป Day 2](../README.md) | [เริ่ม Lab 1](01-context-and-response-modes/README.md)
