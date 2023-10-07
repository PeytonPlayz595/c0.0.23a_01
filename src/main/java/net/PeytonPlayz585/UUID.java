package net.PeytonPlayz585;

import java.util.Random;

public class UUID {
    private static final char[] HEX_CHARS = "0123456789abcdef".toCharArray();
    private static final Random RANDOM = new Random();

    public static String randomUUID() {
        char[] uuidChars = new char[36];

        for (int i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuidChars[i] = '-';
            } else {
                uuidChars[i] = HEX_CHARS[RANDOM.nextInt(16)];
            }
        }

        return new String(uuidChars);
    }
}
