const api = `http://localhost:3000/profile`;

document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // <-- stops page reload

    let input = document.querySelector("#input").value.trim();
    let jsonData = JSON.parse(`[${input}]`);

    try {
        // Fetch existing data from json-server
        const res = await fetch(api);
        const existing = await res.json();

        for (const item of jsonData) {
            // ✅ Check if this id already exists
            const exists = existing.some((entry) => entry.id === item.id);

            if (exists) {
                console.warn(`⚠️ Skipped duplicate id: ${item.id}`);
                continue; // Skip inserting duplicate
            }

            // If no duplicate, insert new record
            await fetch(api, {
                method: "POST",
                body: JSON.stringify(item),
                headers: { "Content-Type": "application/json" },
            });
        }

        console.log("✅ Data posted without reload (duplicates skipped)");
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
});
