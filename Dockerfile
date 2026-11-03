# Static Font Journey site served by nginx (stable branch, Alpine).
# No build step and no runtime dependencies: only explicit app files and
# bundled assets are copied in (see .dockerignore for the allow-list).
FROM nginx:1.30.6-alpine3.24

# Replace the stock config with the hardened static-site config.
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html app.js model.js color.js styles.css f.svg /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Make served files world-readable regardless of the host's file modes.
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} + \
 && find /usr/share/nginx/html -type f -exec chmod 644 {} +

# Run without root; all writable paths in nginx.conf live in /tmp.
USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
