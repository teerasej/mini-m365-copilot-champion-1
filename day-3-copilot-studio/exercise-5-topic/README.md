# แบบฝึกหัดที่ 3: ออกแบบ Topic วิเคราะห์รายงานการเงินจากไฟล์ Excel ด้วย Prompt node

🔑 **ต้องการ M365 Copilot License + สิทธิ์เข้าใช้ Copilot Studio**

แบบฝึกหัดนี้จะพาเราสร้าง Topic แรกของ **Krungsri Financial Report Assistant** โดยให้ผู้ใช้แนบไฟล์รายงานการเงินรายเดือน (Excel) เข้ามาในบทสนทนา แล้วให้ Agent ใช้ **Prompt node** วิเคราะห์ไฟล์นั้นตาม prompt ที่เรากำหนดไว้ล่วงหน้า เพื่อให้ได้ผลสรุปกลับมาในบทสนทนา

```mermaid
flowchart TD
    A[Trigger: ขอวิเคราะห์รายงานการเงินรายเดือน] --> B[Message: แจ้งขอบเขตงาน]
   B --> C[Question: แนบไฟล์รายงานการเงิน]
   C --> D[Prompt node: วิเคราะห์ไฟล์ -> FinancialAnalysisResult]
   D --> E[Message: แสดงผลวิเคราะห์]
   E --> F[End current topic]
```

---

## Practice 1: สร้าง Topic และตั้ง Description สำหรับ Trigger

1. เข้า [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) แล้วเปิด Agent `Financial Report Assistant` ของพวกเรา
2. ไปที่ **Topics** และกด **Add a topic** เลือก **Blank Topic**
   ![alt text](images/add-blank-topic.png)
3. ด้านบนขวา ให้คลิกตั้งชื่อ Topic ว่า `Monthly Report Intake`
   ![alt text](images/rename-topic-title.png)
4. ลงมาที่ Trigger node และใส่ Description prompt เพื่อช่วยให้ Agent เลือก Topic นี้ได้แม่นขึ้น เช่น:

   ```
   Use this topic when the user asks Krungsri's Financial Report Assistant to analyze a monthly financial report.
   The user will attach an Excel workbook containing the report data.
   Typical requests include: "ช่วยวิเคราะห์รายงานการเงินรายเดือนของ Krungsri ให้หน่อย", "สรุปผลจากไฟล์รายงานการเงินที่แนบมาให้หน่อย", "Analyze this month's financial report file"
   ```

   ![alt text](images/set-trigger-description.png)
5. กดปุ่ม **Save** ด้านบนขวาเพื่อบันทึกการเปลี่ยนแปลงทั้งหมด
6. ทดสอบ prompt

   ```
   ช่วยวิเคราะห์รายงานการเงินรายเดือนของ Krungsri ให้หน่อย
   ```
7. ตรวจสอบว่า Agent มีการเลือก Topic นี้หรือไม่

> 💡 **Tip:** ใน Description ให้ระบุเจตนาของผู้ใช้อย่างชัดเจนว่าเป็นการวิเคราะห์รายงานการเงินจากไฟล์แนบ เพื่อช่วยให้ Agent เลือก Topic นี้ได้แม่นยำขึ้น

---

## Practice 2: เพิ่มคำถามให้แนบไฟล์รายงานการเงิน

1. จากด้านล่างของ Trigger node ให้กด **+** แล้วเลือก **Ask a question** node
2. คลิกที่ชื่อด้านบนของ Question node แล้วตั้งชื่อว่า

   ```
   Ask for report file
   ```
3. ใช้ข้อความด้านล่างสำหรับช่อง **Message**

   ```
   กรุณาแนบไฟล์รายงานการเงินรายเดือน (.xlsx) ที่ต้องการให้วิเคราะห์
   ```
4. จากช่อง **Identify** ให้เลือกประเภทการเก็บข้อมูลเป็น **File** (attachment) เพื่อให้ผู้ใช้แนบไฟล์ Excel ได้โดยตรง
5. จากช่อง **Save response as** คลิกที่ชื่อ **Var1** เพื่อเปิดหน้าต่าง properties ด้านข้าง
6. แล้วกรอกชื่อ ลงไปในช่อง **Variable name**
   ```
   ReportFile
   ```
10. กดปุ่ม **Save** ด้านบนขวาเพื่อบันทึกการเปลี่ยนแปลงทั้งหมด

> 💡 **Tip:** ใช้ไฟล์ตัวอย่าง [`Krungsri-Monthly-Financial-Report-May2026.xlsx`](../files/Krungsri-Monthly-Financial-Report-May2026.xlsx) เป็นไฟล์ทดสอบสำหรับ Practice นี้ ไฟล์นี้มี 4 ชีต (`Summary`, `Revenue`, `Costs`, `Variance_Analysis`) ครอบคลุมข้อมูลของ Retail Banking, Corporate Banking, SME Banking และ Card & Payments

---

## Practice 3: เพิ่ม Prompt node เพื่อวิเคราะห์ไฟล์

1. จากด้านล่างของ Question node `Ask for report file` ให้กด **+** แล้วเลือก **Prompt**
2. กดชื่อด้านบนของ Prompt node เพื่อตั้งชื่อ Prompt node ว่า

   ```
   Analyze monthly financial report
   ```
3. สังเกตช่อง instruction ทางซ้าย
4. ใส่ prompt สำหรับ 1 use case ตัวอย่างการวิเคราะห์ ดังนี้ (แก้ไขคำได้ตามทีม):

   ```
   คุณคือนักวิเคราะห์การเงินของธนาคาร Krungsri
   จากไฟล์รายงานการเงินรายเดือนที่แนบมา {{ReportFile}} ให้สรุปเป็น Executive Summary ภาษาไทย ความยาวไม่เกิน 200 คำ ประกอบด้วย:
   - ภาพรวมรายได้และค่าใช้จ่ายหลักตาม Business Unit
   - Variance ที่สำคัญเทียบกับ Budget พร้อมสาเหตุโดยย่อ
   - ความเสี่ยงหรือประเด็นที่ควรจับตาในเดือนนี้
   ```
5. แทนที่ **{{ReportFile}}** ด้วย "/" เพื่อเลือก Image or Document และตั้งชื่อตัว input เป็น
   ```
   Report file
   ```
6. จากด้านบนของ Instruction ใน prompt node กดเลือกปุ่ม **(...)** และเลือก **Setting**
7. **ลงมาด้านล่างเพื่อเปิดการทำงานของ Code Interpreter**
8. กดปิด setting
9. กดเลือกตัวแปร input **ReportFile** เพื่อเลือกไฟล์ [`Krungsri-Monthly-Financial-Report-May2026.xlsx`](../files/Krungsri-Monthly-Financial-Report-May2026.xlsx) 
10. กดปุ่ม **Test** เพื่อทดสอบ
    > 💡 หากผลการทำงานไม่เป็นที่น่าพอใจ ให้เลือกปรับ model ให้มีคุณภาพสูงขึ้น
11. กดปุ่ม **Save** ด้านบนขวาเพื่อบันทึกการเปลี่ยนแปลงทั้งหมด
12. จาก Prompt Node ในส่วน output ด้านล่าง ให้กดสร้างตัวแปรใหม่ และตั้งชื่อตัวแปรใหม่ชื่อตามด้านล่าง

   ```
   FinancialAnalysisResult
   ```


---

## Practice 4: แสดงผลวิเคราะห์กลับให้ผู้ใช้

1. จากด้านล่างของ Prompt node ให้กด **+** แล้วเลือก **Send a message**
2. ตั้งชื่อ Message node ว่า

   ```
   Show analysis result
   ```
3. ใส่ข้อความในช่อง Message โดยแทรกตัวแปร

   ```
   {{FinancialAnalysisResult}}
   ```
---

## Practice 5: ปรับ instructions ของ Agent ให้เรียกใช้งาน Topic เมื่อตรงตามเงื่อนไข

1. ไปที่หน้า **Overview** ของ Agent แล้วลงมาด้านล่างที่ **Instructions**
2. กดปุ่ม **Edit** เพื่อแก้ไข Instructions
3. ด้านท้ายของ Instructions ให้เพิ่มข้อความเพื่อบอก Agent ว่าเมื่อใดควรเรียกใช้ Topic นี้ เช่น:

   ```
   - If user asks for monthly financial report analysis, use
   ```
4. พิมพ์ `/` และเลือก Topic `Monthly Report Intake`
5. กดปุ่ม **Save** เพื่อบันทึกการเปลี่ยนแปลง

---

## Practice 6: ทดสอบ Topic รอบแรก

1. เปิดหน้าต่าง **Test** ด้านขวา
2. ทดสอบด้วยคำสั่ง:

   ```
   ช่วยวิเคราะห์รายงานการเงินรายเดือนของ Krungsri ให้หน่อย
   ```
3. เมื่อ Agent ขอไฟล์แนบ ให้แนบไฟล์ [`Krungsri-Monthly-Financial-Report-May2026.xlsx`](../files/Krungsri-Monthly-Financial-Report-May2026.xlsx)
4. ตรวจสอบว่า Agent แสดงผลวิเคราะห์แบบ Executive Summary กลับมา
5. บันทึกสิ่งที่ต้องปรับ 2-3 จุด เช่น prompt ยังสรุปไม่ตรงประเด็น หรือคำถามยังไม่ชัด

---

## สรุป

ในแบบฝึกหัดนี้ พวกเราได้สร้าง Topic `Monthly Report Intake` ที่รับไฟล์ Excel รายงานการเงินของ Krungsri แล้วใช้ **Prompt node** วิเคราะห์ตาม prompt ที่กำหนดไว้ 1 use case จนได้ตัวแปร `FinancialAnalysisResult`

ขั้นตอนถัดไป → [เพิ่ม Knowledge ให้ Agent ตอบคำศัพท์ทางการเงิน](../exercise-3-knowledge/README.md)
