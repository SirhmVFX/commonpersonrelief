"use server"

const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxk1U-VhzcqLoMRcJk2RgJZ27Yk-HX6DvnNSYP6ba4zM0DpAR5w7uDFgtIoPE4YTEiT1Q/exec"
export const applicationForm = async (formData) => {
    const data = Object.fromEntries(formData);
    try {
        const res = await fetch(googleScriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
            }),
        })

        if (!res.ok) {
            throw new Error("Failed to submit application");
        }

        return {
            status: "success",
            message: "Application submitted successfully",
        }
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}
