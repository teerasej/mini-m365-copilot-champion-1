# Agent Builder: ลองสร้าง Agent 3 รูปแบบ

ในแบบฝึกหัดนี้พลจะพาพวกเราลองสร้าง Agent จากงานจริง 3 แบบครับ เริ่มจากการสร้าง Agent แบบเต็มหนึ่งครั้ง จากนั้นลองเปลี่ยนโจทย์วิเคราะห์ และจบด้วยการเพิ่ม **Knowledge** จากเว็บไซต์และเอกสาร

ข้อความที่ Agent ตอบอาจไม่เหมือนตัวอย่างทุกคำ ให้พวกเราสังเกตว่า Agent ทำตามขอบเขต ใช้แหล่งข้อมูลอ้างอิงที่เรามอบให้ได้อย่างถูกต้องนะครับ

> **License:** ต้องใช้บัญชีที่เข้าถึง Microsoft 365 Copilot และ **Agent Builder** ได้ ความสามารถในการ Upload, สร้างไฟล์ และ Share อาจขึ้นอยู่กับ license และ policy ขององค์กร

## เตรียมไฟล์ก่อนเริ่ม

ดาวน์โหลดไฟล์จาก [รายการไฟล์ตัวอย่าง Day 2](../../sample-files.md) หรือจาก Day 2 ZIP แล้วเตรียมไฟล์ต่อไปนี้

- `Branch_Service_Modernization_Proposal.docx`
- `Vendor_Proposal_A_Northstar.docx`
- `Vendor_Proposal_B_BluePeak.docx`
- `Vendor_Proposal_C_Greenline.docx`
- `Vendor_Comparison_Report_Template.docx`
- `Krungsri_5_Banking_Products_Quick_Guide.pdf`

> **💡 Tip:** ถ้า Upload ไฟล์ไม่สำเร็จ ให้เปิดไฟล์ คัดลอกเนื้อหา และวางใน Copilot Chat โดยให้ส่วนข้อมูลอ้างอิงขึ้นต้นด้วย `SOURCE: ชื่อไฟล์` เพื่อให้เรายังทำแบบฝึกหัดต่อได้

## แบบฝึกหัด

1. [Proposal Review Coach](01-proposal-review-coach.md) — สร้าง Agent และใช้วิเคราะห์ project proposal สำหรับผู้บริหาร
2. [Vendor Comparison Advisor](02-vendor-comparison-advisor.md) — ปรับ instruction เพิ่ม report template เป็น Knowledge และสร้างรายงานเพื่อทำหน้าที่เปรียบเทียบ vendor 3 เจ้า
3. [Krungsri Product Information Agent](03-krungsri-product-information-agent.md) — เพิ่มเว็บไซต์และ PDF เป็น Knowledge แล้วทดสอบคำตอบที่มีและไม่มีข้อมูลรองรับ

[← กลับไป Day 2](../../README.md) | [เริ่ม Exercise 1: Proposal Review Coach →](01-proposal-review-coach.md)
