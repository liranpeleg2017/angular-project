<!-- .net web.config -->

    <system.webServer>
      <rewrite>
          <rules>
              <rule name="ClientRouting" stopProcessing="true">
                  <match url="^(.*)$" ignoreCase="false" />
                  <conditions logicalGrouping="MatchAll">
                      <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" pattern="" ignoreCase="false" />
                  </conditions>
                  <action type="Rewrite" url="index.html" appendQueryString="true" />
              </rule>
          </rules>
      </rewrite>

    </system.webServer>