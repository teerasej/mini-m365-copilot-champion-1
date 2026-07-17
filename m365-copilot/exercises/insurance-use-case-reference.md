# Insurance Workshop - Business Use Case Tuning Reference

เอกสารนี้ใช้เป็นคู่มือสำหรับปรับโจทย์ในเวิร์คชอป Microsoft 365 Copilot ให้สอดคล้องกับบริบทธุรกิจประกันชีวิตในประเทศไทย โดยคงโครงแบบฝึกหัดเดิมไว้ และเปลี่ยนเฉพาะ scenario, prompt, และผลลัพธ์ที่คาดหวัง

## ขอบเขตการใช้งานเอกสารนี้

- ครอบคลุมการ tune สำหรับ Exercise 1-5 และ Exercise 6 (Create First AI Agent)
- เน้นการใช้งานระดับ workshop/demo เพื่อให้ทีมเห็นภาพการนำไปใช้จริง
- ไม่ใช้ข้อมูลลูกค้าจริง หรือข้อมูลสุขภาพจริง (PII/PHI)

## Business Context ที่แนะนำให้ใช้ในเวิร์คชอป

### Personas หลัก

1. ผู้บริหารสายงาน (Head of Operations / Head of Distribution)
2. ผู้จัดการทีมขายและที่ปรึกษาประกันชีวิต
3. ทีม Operations และ Customer Service
4. ทีมพิจารณารับประกัน (Underwriting)
5. ทีมที่กำลังเริ่มสร้าง Agent ภายในองค์กร

### Pain Points ที่นำไปใช้กับ Copilot ได้ทันที

1. ข้อมูลกระจัดกระจายจากหลายทีม ทำให้สรุปสถานการณ์ช้า
2. รายงานผู้บริหารใช้เวลานาน และภาษายังไม่สม่ำเสมอ
3. การทำสไลด์จากรายงานต้องใช้แรง manual สูง
4. การวิเคราะห์ KPI ขาย/บริการลูกค้ามีหลายมิติและยากต่อการหา anomaly
5. อีเมลและ meeting follow-up ยังไม่เป็นระบบเดียวกัน

## Mapping: Existing Exercise -> Insurance Scenario

| Existing Exercise | เป้าหมายเดิม | Scenario ที่แนะนำ |
| --- | --- | --- |
| Exercise 1: Copilot Chat & Create | สรุปสถานการณ์จาก raw notes | สรุปสถานการณ์งานบริการลูกค้าและงานขายรายสัปดาห์ (What/Why/So what/Now what) |
| Exercise 2: Word | ร่างรายงานผู้บริหาร | ร่างรายงานผู้บริหารสายประกันชีวิต: KPI, ปัญหา, แผนแก้ไข 2 สัปดาห์ |
| Exercise 3: PowerPoint | สร้างสไลด์จากไฟล์รายงาน | สร้างสไลด์สำหรับ review กับผู้บริหารและหัวหน้าช่องทางขาย |
| Exercise 4: Excel | หา trend/anomaly | วิเคราะห์ KPI ด้าน New Business, Persistency, Claim TAT, Complaint |
| Exercise 5: Outlook + Teams | สรุป/ร่างการสื่อสาร | สรุป email/meeting และร่างการสื่อสารกับทีมที่ปรึกษา/ทีมบริการ |
| Exercise 6: Create First AI Agent | สร้าง agent จากแหล่งข้อมูล | สร้าง Internal Assistant Agent สำหรับค้นหา policy/process/FAQ ภายใน |

## Prompt Pack สำหรับการ Tune เวิร์คชอป

### Exercise 1 - Copilot Chat & Create

```
จากข้อมูล operational note ด้านล่าง ช่วยสรุปสำหรับผู้บริหารในรูปแบบ:
1) What happened
2) Why
3) So what (ผลกระทบต่อลูกค้า/ยอดขาย/ต้นทุน/ความเสี่ยง)
4) Now what (ข้อเสนอแนะ 3 ข้อ พร้อม owner)

ตอบเป็นภาษาไทยแบบผู้บริหาร กระชับ ชัดเจน เป็น bullet
```

### Exercise 2 - Copilot in Word

```
ร่างรายงานสรุปผู้บริหาร 1-2 หน้า สำหรับบริษัทประกันชีวิต
โครงต้องมี:
- Executive summary (5 bullets)
- KPI highlights (new policy, persistency, claim turnaround time, complaint)
- Issues & root causes
- 2-week action plan (owner + due date)
- Requests to leadership

ภาษาไทยทางการ กระชับ อ่านง่าย และ actionable
```

### Exercise 3 - Copilot in PowerPoint

```
Create an executive presentation from this report.
Audience: Head of Operations, Distribution, Customer Service.
Tone: formal, concise, business-focused.
Slides required:
1) Monthly performance summary
2) KPI trend highlights
3) Top issues and root causes
4) 2-week action plan with owners
5) Risks and decisions needed
```

### Exercise 4 - Copilot in Excel

```
ช่วยตรวจหา anomaly ที่สำคัญ:
1) วันที่ claim turnaround time สูงกว่าค่าเฉลี่ยอย่างมีนัยสำคัญ
2) ช่องทางขายที่ conversion ลดลงต่อเนื่อง
3) complaint เพิ่มขึ้นผิดปกติ

สรุปเป็นตารางสั้นๆ พร้อมข้อเสนอแนะเบื้องต้น
```

### Exercise 5 - Outlook + Teams

```
สรุปการประชุมนี้เป็น:
- Decisions
- Action items (Owner + Due)
- Risks/Dependencies

และช่วยร่างข้อความประกาศใน Teams 5 บรรทัดให้ทีมปฏิบัติการ
```

### Exercise 6 - Create First AI Agent

```
Help our staff quickly find and understand internal life-insurance policy, claim process, and customer service guidelines in Thai.
Always answer with: summary, source reference, and next action.
If information is missing, ask clarifying questions first.
```

## Governance Checklist ก่อนใช้ในงานจริง

1. ลบหรือ mask ข้อมูลส่วนบุคคลทุกครั้งก่อนนำเข้า prompt
2. หลีกเลี่ยงข้อมูลสุขภาพที่ระบุตัวบุคคลได้
3. ตรวจทานคำตอบสำคัญโดยผู้รับผิดชอบงานก่อนส่งลูกค้า
4. เก็บ prompt template มาตรฐานให้ทีมใช้ร่วมกัน
5. กำหนด owner ของแต่ละ workflow ให้ชัดเจน (Sales/Ops/Service/Compliance)