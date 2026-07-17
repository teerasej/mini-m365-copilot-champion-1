# Mini Microsoft 365 Copilot Champion

แบบฝึกหัดภาษาไทยสำหรับเวิร์กช็อป 3 วัน ออกแบบมาเพื่อทำให้พวกเราฝึกการตรวจสอบปัญหาของการทำงานในปัจจุบัน ไปสู่การเลือกใช้ Microsoft 365 Copilot รวมถึง Copilot Studio เพื่อให้เราได้มีพื้นฐานในการเป็น **Copilot Champion** ที่สามารถแนะนำการใช้งาน Copilot และสร้างเอเจนต์ให้กับทีมงานของตนเองได้ครับ

เรื่องราวตลอดหลักสูตรจะมีตั้งแต่การ สร้าง AI Use Canvas, ทดลอง Copilot, แล้วเปลี่ยนแนวคิดเป็น AI Agent Canvas พร้อมทั้งทดลองสร้าง Agent ต้นแบบจากโจทย์ที่กำหนด เพื่อให้ได้ประสบการณ์การใช้งานจริงและสามารถนำไปต่อยอดกับงานของตนเองได้

## สิ่งที่ต้องเตรียม

- **วันที่ 1 — Foundation:** post-it  ปากกาเมจิก dot sticker และ flipchart วันนี้จะไม่มีการฝึกใช้งานโปรแกรมใดๆ นะ
- **วันที่ 2 — Microsoft 365 Copilot:** บัญชี Microsoft 365 ที่เปิดใช้ Copilot Premium และสิทธิ์ใช้ **Agent Builder**; ดาวน์โหลดไฟล์ใน [`files/m365-copilot/`](files/m365-copilot/)
- **วันที่ 3 — Copilot Studio:** บัญชีผู้ใช้ Microsoft 365 ที่มีสิทธิ์สร้างและนำ Agent ไปใช้ใน Microsoft Copilot Studio, กล่องจดหมาย Outlook และสิทธิ์ใช้ connector; ดาวน์โหลดไฟล์ใน [`files/copilot-studio/`](files/copilot-studio/)


## สารบัญแบบฝึกหัด

| วัน | เวลา | Section | ผลลัพธ์ของผู้เรียน | แบบฝึกหัด |
|---|---|---|---|---|
| Foundation | 09:00–10:30 | 1 | ถอดแผนงานประจำวันและค้นหา pain point | [Foundation Day README](day-1-foundation/README.md) |
| Foundation | 10:45–12:00 | 2 | เลือกลำดับความสำคัญ pain point  ด้วย selection framework | [Foundation Day README](day-1-foundation/README.md) |
| Foundation | 13:00–14:30 | 3 | Prepare the workflow for human-AI ready | [Foundation Day README](day-1-foundation/README.md) |
| Foundation | 14:45–16:00 | 4 | รวมรวมไอเดียและใช้งาน AI Use Canvas | [Foundation Day README](day-1-foundation/README.md) |
| Microsoft 365 Copilot | 09:00–10:30 | 1 | อีเมลติดตามงาน สรุปสัปดาห์ และ meeting brief | [Microsoft 365 Copilot Day README](day-2-m365-copilot/README.md) |
| Microsoft 365 Copilot | 10:45–12:00 | 2 | ชุดผลงานจาก Word, PowerPoint, Excel และ Outlook | [Microsoft 365 Copilot Day README](day-2-m365-copilot/README.md) |
| Microsoft 365 Copilot | 13:00–14:30 | 3 | Sales Proposal Assistant ที่ผ่านการทดสอบและพร้อมแชร์ | [Microsoft 365 Copilot Day README](day-2-m365-copilot/README.md) |
| Microsoft 365 Copilot | 14:45–16:00 | 4 | AI Use Canvas ที่เชื่อม workflow กับเครื่องมือและ prompt | [Microsoft 365 Copilot Day README](day-2-m365-copilot/README.md) |
| Copilot Studio | 09:00–10:30 | 1 | AI Agent Canvas ที่กำหนดขอบเขต และ Financial Report Assistant เปล่าที่มี instruction ผ่าน smoke test | [Exercise 1: Agent Canvas](day-3-copilot-studio/exercise-1-agent-canvas-template/README.md) · [Exercise 2: Create Agent](day-3-copilot-studio/exercise-2-create-financial-agent/README.md) |
| Copilot Studio | 10:45–12:00 | 2 | Topic ที่รับไฟล์รายงานการเงินและวิเคราะห์ด้วย Prompt node | [Exercise 3: Report Intake Topic](day-3-copilot-studio/exercise-5-topic/README.md) |
| Copilot Studio | 13:00–14:30 | 3 | เอเจนต์ที่เพิ่ม Knowledge สำหรับตอบคำศัพท์ทางการเงิน | [Exercise 4: Knowledge](day-3-copilot-studio/exercise-3-knowledge/README.md) |
| Copilot Studio | 14:45–16:00 | 4 | Agent Flow ส่งอีเมลสรุปรายงาน ผ่านการทดสอบ Happy/Cancel path | [Exercise 5: Agent Flow & Test](day-3-copilot-studio/exercise-4-agent-flow-as-a-tools/README.md) |

## โครงสร้าง

- [`day-1-foundation/`](day-1-foundation/) — workshop แบบไม่ใช้แอป
- [`day-2-m365-copilot/`](day-2-m365-copilot/) — ฝึก Copilot Chat, Microsoft 365 apps และ Agent Builder
- [`day-3-copilot-studio/`](day-3-copilot-studio/) — สร้าง เพิ่มความรู้ เพิ่มเครื่องมือ และเผยแพร่เอเจนต์
- [`templates/`](templates/) — printable Markdown templates
- [`files/`](files/) — learner files ที่ใช้ร่วมกัน
- [`SOURCES.md`](SOURCES.md) — แหล่งอ้างอิงและ commit ที่ตรึงไว้

> คำเตือน: AI อาจสร้างข้อมูลผิดพลาด ผู้เรียนต้องตรวจสอบแหล่งข้อมูล ตัวเลข ผู้รับอีเมล และเนื้อหาก่อนใช้หรือส่งทุกครั้ง
