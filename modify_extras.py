import re

with open('/home/jigyasuchauhan/Jigyasusinghchouhan.github.io/index.html', 'r') as f:
    content = f.read()

# 1. Add Docker Pull Hero
docker_pull_html = """
                <div class="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-lg shadow-lg border border-slate-700 group cursor-pointer" onclick="navigator.clipboard.writeText('docker pull jigyasu/resume:latest'); const t = this.querySelector('.copy-text'); t.innerText = 'Copied!'; setTimeout(() => t.innerText = 'Copy', 2000);" data-aos="fade-up" data-aos-delay="400">
                    <i data-lucide="terminal" class="w-4 h-4 text-emerald-400"></i>
                    <code class="text-sm text-slate-300 mono">docker pull jigyasu/resume:latest</code>
                    <span class="copy-text text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-violet-400 transition-colors ml-2 border-l border-slate-700 pl-3">Copy</span>
                </div>
            </div>
        </section>"""

# Find the end of Hero section
if "docker pull" not in content:
    content = content.replace('            </div>\n        </section>\n\n        <!-- About Section -->', docker_pull_html + '\n\n        <!-- About Section -->')

# 2. System Uptime in Footer
uptime_html = """            <div class="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs font-bold text-slate-600 dark:text-slate-400 mono tracking-wider">STATUS: ALL SYSTEMS OPERATIONAL | UPTIME: <span id="uptime-counter">99.999%</span></span>
            </div>
        </div>
    </footer>"""

if "uptime-counter" not in content:
    # Replace the empty p tag block in footer with uptime
    content = re.sub(r'<p class="text-violet-500/80 text-\[10px\] font-bold tracking-\[0\.2em\] uppercase mono">\s*</p>\s*</div>\s*</footer>', uptime_html, content)

# 3. Add Uptime Script
uptime_script = """
        // Uptime counter logic
        setInterval(() => {
            const start = new Date("2023-01-01T00:00:00").getTime();
            const now = new Date().getTime();
            const diff = now - start;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);
            const el = document.getElementById('uptime-counter');
            if (el) el.innerText = `${days}D ${hours}H ${mins}M ${secs}S`;
        }, 1000);
    </script>
</body>"""

if "Uptime counter logic" not in content:
    content = content.replace('    </script>\n</body>', uptime_script)

with open('/home/jigyasuchauhan/Jigyasusinghchouhan.github.io/index.html', 'w') as f:
    f.write(content)
