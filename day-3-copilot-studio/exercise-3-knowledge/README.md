# แบบฝึกหัดที่ 4:  Knowledge

🔑 **ต้องการ M365 Copilot License + สิทธิ์เข้าใช้ Copilot Studio**

ทางพลออกแบบแบบฝึกหัดนี้ เพื่อพาเราต่อยอด **Financial Report Assistant** ที่สร้างไว้ให้รองรับการคุยได้มากขึ้น 

จุดสำคัญของแบบฝึกหัดนี้คือ **ไม่ต้องสร้าง Topic ใหม่** ให้เริ่มจาก Agent เดิมที่มีอยู่แล้ว แล้วปรับ **Instructions** 


---

## Practice 1: เตรียม Knowledge ให้พร้อม (Technical Terms)

1. ไปที่แท็บ **Knowledge** ของ Agent
2. ถ้ายังไม่มีไฟล์สำหรับฝึก ให้ดาวน์โหลดทั้งหมดจาก [Day 3 sample files (.zip)](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-3-copilot-studio/downloads/day-3-sample-files.zip)
3. กด **Add knowledge**
   ![alt text](./images/click-add-knowledge.png)
4. อัปโหลดไฟล์

   ```text
   financial-report-technical-terms-knowledge.docx
   ```

   ![alt text](./images/upload-knowledge-files.png)
5. กด **Add to agent**
   ![alt text](./images/add-files-to-agent.png)
6. ตรวจสถานะให้เป็น **Ready** ก่อนเริ่มทดสอบ
   ![alt text](./images/check-knowledge-status.png)

> 💡 Tip: ถ้า status ของไฟล์ยังเป็น `In Progress` ตัว knowledge จะยังไม่สามารถนำมาใช้ได้

---

## Practice 2: ปรับ Agent Instructions 

1. ไปที่หน้า **Overview** ของ Agent แล้วแก้ส่วน **Instructions**
2. เพิ่มข้อความให้ชัดว่า Agent อธิบาย technical term โดยอาศัยข้อมูลจาก knowledge ที่อัปโหลดไว้แล้ว
3. สามารถใช้ตัวอย่างข้อความนี้แทนที่ลงไปได้ **แล้วถ้าเกิดไปลบการเรียกใช้ตัวแปรใน instruction เดิมให้ทำการเพิ่มตัวแปรกลับไปเป็นแบบเดิมด้วย**

```text
You are Financial Report Assistant for enterprise business users.

Scope:
- Explain financial reporting technical terms using approved knowledge.

Rules:
- If user asks the meaning of financial reporting technical terms, answer with **grounded knowledge** and keep explanation concise.
- If request is outside finance reporting scope, ask user to rephrase within scope.
```

4. กด **Save**

> ⚠️ **Note:** ในแบบฝึกหัดนี้ยังไม่ต้องเพิ่ม trigger ใหม่หรือสร้าง Topic ใหม่

---

## Practice 3: ตรวจสอบการเปิด orchestration เพื่อให้คุยแบบผสมได้

1. ไปที่ **Settings** ของ Agent
2. ตรวจส่วน **Orchestration** ให้เป็นโหมด generative เพื่อให้ Agent ตัดสินใจเส้นทางบทสนทนาได้
3. บันทึกการตั้งค่า

> 💡 Tip: ในแบบฝึกหัดถัดไป เราจะต่อยอดจาก Topic เดิมอีกครั้ง แต่จะเพิ่ม action สำหรับส่งรายงานต่อให้ครบกระบวนการ

---

## Practice 4: ทดสอบ 

ให้ทดสอบใน **Test your agent** ตามลำดับนี้

1. สลับเป็นคำถามเชิง technical term ในบทสนทนาเดียวกัน

   ```text
   Variance Percent คืออะไร และควรตีความอย่างไรในรายงานรายเดือน
   ```

2. ทดสอบอีกคำถามเชิงความรู้

   ```text
   EBITDA margin ต่างจาก gross margin อย่างไร
   ```

3. ทดสอบ out-of-scope 1 เคส

   ```text
   ช่วยแนะนำร้านกาแฟใกล้ออฟฟิศ
   ```

สิ่งที่ต้องสังเกต:
- Agent ยังทำ structured flow สำหรับงานรายงานได้
- Agent ตอบคำถาม technical term ได้โดยอิง knowledge
- คำถามนอกขอบเขตไม่ควรถูกตอบมั่ว

---

## Practice 5: สังเกต Citation ในคำตอบของ Agent

ให้ทดสอบต่อใน **Test your agent** จากบทสนทนาเดิม แล้วโฟกัสที่การอ้างอิงแหล่งข้อมูล

1. ถามคำถามเชิง technical term อีกครั้ง (หรือใช้คำถามเดิมจาก Practice 4)

   ```text
   Variance Percent คืออะไร และควรตีความอย่างไรในรายงานรายเดือน
   ```

2. สังเกตในคำตอบว่า Agent แสดง citation หรือ source reference ของ knowledge ที่ใช้อ้างอิงหรือไม่
3. ถ้าไม่พบ citation ให้กลับไปปรับปรุงให้ instruction มีการอ้างอิงแหล่งที่มาของคำตอบ
   > สังเกตว่ามีการปรับปรุง Rule ข้อ 2 เพิ่มเติม
   ```text
   You are Financial Report Assistant for enterprise business users.

Scope:
- Explain financial reporting technical terms using approved knowledge.

Rules:
- If user asks the meaning of financial reporting technical terms, answer with **grounded knowledge** and keep explanation concise, always show citation or source reference of the knowledge used.
- If request is outside finance reporting scope, ask user to rephrase within scope.
   ```

4. เปรียบเทียบผลก่อนและหลังใช้ prompt ปรับปรุง ว่าคำตอบชัดเจนขึ้นและตรวจสอบแหล่งที่มาได้มากขึ้นหรือไม่

สิ่งที่ต้องสังเกต:
- คำตอบยังคงอยู่ในขอบเขตการเงินและอิง knowledge เดิม
- ถ้าระบบรองรับ ควรเห็น citation หรือ source reference ในคำตอบ
- ถ้าไม่แสดง citation Agent ควรตอบอย่างโปร่งใส ไม่แต่งแหล่งอ้างอิงขึ้นมาเอง

> 💡 Tip: UI ของแต่ละ tenant อาจแสดงการอ้างอิงไม่เหมือนกัน ให้ดูหลักการเดียวกันคือมีร่องรอยของ source reference ที่ตรวจสอบย้อนกลับได้

---

## สรุป

ในแบบฝึกหัดนี้ พวกเราได้เพิ่ม knowledge ให้กับ Financial Report Assistant โดยใช้ Agent orchestration และ knowledge เดิม 

ขั้นตอนถัดไป → [เพิ่ม Agent Flow และใช้ Send an email (V2) สำหรับส่งรายงาน](../exercise-4-agent-flow-as-a-tools/README.md)

   > ⚠️ Note: ในแบบฝึกหัดนี้ให้ใช้ `UserKnowledgeQuestion` เหมือนกับ branch แรก เพื่อให้ทั้ง 2 เส้นทางรับคำถามจากตัวแปรเดียวกัน และเปรียบเทียบผลการ route ได้ง่าย

