# Mini Microsoft 365 Copilot Champion

แบบฝึกหัดภาษาไทยสำหรับเวิร์กช็อป 3 วัน พลออกแบบมาเพื่อทำให้พวกเราฝึกการตรวจสอบปัญหาของการทำงานในปัจจุบัน ไปสู่การเลือกใช้ Microsoft 365 Copilot รวมถึง copilot studio เพื่อให้เราได้มีพื้นฐานในการเป็น **Copilot Champion** ที่สามารถแนะนำการใช้งาน Copilot และสร้างเอเจนต์ให้กับทีมงานของตนเองได้ครับ

เรื่องราวตลอดหลักสูตรจะมีตั้งแต่การ สร้าง AI Use Canvas, ทดลอง Copilot, แล้วเปลี่ยนแนวคิดเป็น AI Agent Canvas พร้อมทั้งทดลองสร้าง Agent ต้นแบบจากโจทย์ที่กำหนด เพื่อให้ได้ประสบการณ์การใช้งานจริงและสามารถนำไปต่อยอดกับงานของตนเองได้

## สิ่งที่ต้องเตรียม

- **วันที่ 1 — Foundation:** post-it  ปากกาเมจิก dot sticker และ flipchart วันนี้จะไม่มีการฝึกใช้งานโปรแกรมใดๆ นะ
- **วันที่ 2 — Microsoft 365 Copilot:** บัญชี Microsoft 365 ที่เปิดใช้ Copilot Premium และสิทธิ์ใช้ **Agent Builder**; ดาวน์โหลดไฟล์ใน [`files/m365-copilot/`](files/m365-copilot/)
- **วันที่ 3 — Copilot Studio:** บัญชีผู้ใช้ Microsoft 365 ที่มีสิทธิ์สร้างและนำ Agent ไปใช้ใน Microsoft Copilot Studio, กล่องจดหมาย Outlook และสิทธิ์ใช้ connector; ดาวน์โหลดไฟล์ใน [`files/copilot-studio/`](files/copilot-studio/)


## สารบัญแบบฝึกหัด

| วัน | เวลา | Section | ผลลัพธ์ของผู้เรียน | แบบฝึกหัด |
|---|---|---|---|---|
| Foundation | 09:00–10:30 | 1 | แผนที่งานประจำวันและจุดติดขัด | [Map Work Friction](foundation/01-map-work-friction/) |
| Foundation | 10:45–12:00 | 2 | Opportunity statement ที่ผ่านการจัดกลุ่มและโหวต | [Prioritize Opportunity](foundation/02-prioritize-opportunity/) |
| Foundation | 13:00–14:30 | 3 | Future-state workflow และ AI Use Canvas ฉบับร่าง | [Redesign Human + AI Workflow](foundation/03-redesign-human-ai-workflow/) |
| Foundation | 14:45–16:00 | 4 | สมมติฐานพวกเราค่า feedback และ pitch สั้น | [Estimate Value and Pitch](foundation/04-estimate-value-and-pitch/) |
| Microsoft 365 Copilot | 09:00–10:30 | 1 | อีเมลติดตามงาน สรุปสัปดาห์ และ meeting brief | [Copilot Chat and Work IQ](m365-copilot/01-copilot-chat-and-work-iq/) |
| Microsoft 365 Copilot | 10:45–12:00 | 2 | ชุดผลงานจาก Word, PowerPoint, Excel และ Outlook | [Copilot in Microsoft 365 Apps](m365-copilot/02-copilot-in-m365-apps/) |
| Microsoft 365 Copilot | 13:00–14:30 | 3 | Sales Proposal Assistant ที่ผ่านการทดสอบและพร้อมแชร์ | [Build Sales Proposal Assistant](m365-copilot/03-build-sales-proposal-assistant/) |
| Microsoft 365 Copilot | 14:45–16:00 | 4 | AI Use Canvas ที่เชื่อม workflow กับเครื่องมือและ prompt | [Map Tools and Reflect](m365-copilot/04-map-tools-and-reflect/) |
| Copilot Studio | 09:00–10:30 | 1 | Copilot Champion Assistant เปล่าที่มี instruction และผ่าน smoke test | [Create Copilot Champion Assistant](copilot-studio/01-create-copilot-champion-assistant/) |
| Copilot Studio | 10:45–12:00 | 2 | เอเจนต์ที่ใช้ไฟล์และ public website เป็น knowledge | [Add Knowledge](copilot-studio/02-add-knowledge/) |
| Copilot Studio | 13:00–14:30 | 3 | Email Agent Flow ที่ทดสอบแล้ว พร้อม demo website/Teams ตามสิทธิ์ | [Add Email Tool and Publish](copilot-studio/03-add-email-tool-and-publish/) |
| Copilot Studio | 14:45–16:00 | 4 | AI Agent Canvas ชุด test cases และแผนนำไปทดลอง | [Test, Reflect, and Plan](copilot-studio/04-test-reflect-and-plan/) |

## โครงสร้าง

- [`foundation/`](foundation/) — workshop แบบไม่ใช้แอป
- [`m365-copilot/`](m365-copilot/) — ฝึก Copilot Chat, Microsoft 365 apps และ Agent Builder
- [`copilot-studio/`](copilot-studio/) — สร้าง เพิ่มความรู้ เพิ่มเครื่องมือ และเผยแพร่เอเจนต์
- [`templates/`](templates/) — printable Markdown templates
- [`files/`](files/) — learner files ที่ใช้ร่วมกัน
- [`SOURCES.md`](SOURCES.md) — แหล่งอ้างอิงและ commit ที่ตรึงไว้

> คำเตือน: AI อาจสร้างข้อมูลผิดพลาด ผู้เรียนต้องตรวจสอบแหล่งข้อมูล ตัวเลข ผู้รับอีเมล และเนื้อหาก่อนใช้หรือส่งทุกครั้ง
